import { Handle, NodeProps, Position, useNodeId } from 'reactflow';
import { TreeViewData } from '../../data/nodes-edges';
import { Button } from '@blueprintjs/core';
import { FlexColumn, FlexRow } from '../base/Flex';
import { flex1, fullSize, center } from '../../styles';
import { observer } from 'mobx-react-lite';
import { useTreeHandler } from '../../models/TreeHandler';
import { useState, useEffect } from 'react';
import profileUrl from '../../assets/pp.jpeg'

import { FaUser } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';

// Import styles from the dedicated styles file
import {
  nodeContainer,
  nodeContent,
  nodeIcon,
  nodeLabel,
  nodeSubLabel,
  nodeMetadata,
  toggleButton,
  hoverStyles,
  headerContainer,
  progressBarContainer,
  progressBarFill,
  childCountBadge,
  rootNodeContainer,
  rootNodeToggleButton
} from '../../styles/treeNode';

export const treeNodeWidth = 272;
export const treeNodeHeight = 220;
export const rootNodeSize = 150; // Set a size for the root node

export type TreeNodeProps = NodeProps<TreeViewData>

export const TreeNode = observer((props: TreeNodeProps) => {
  const treeHandler = useTreeHandler();
  const [isHovered, setIsHovered] = useState(false);
  const [animatedProficiency, setAnimatedProficiency] = useState(0);
  
  const nodeId = useNodeId();
  const node = treeHandler.getNodeById(nodeId);

  const childCount = node ? treeHandler.getChildrenCount(node) : 0;
  const descendantsCount = node ? treeHandler.getDescendantsCount(node) : 0;

  const { data, isConnectable, id } = props;

  const { showingChildren, setShowingChildren, icon, proficiencyLevel } = data;

  const normalizedProficiency = Math.min(Math.max(proficiencyLevel || 0, 0), 100);

  // Animation effect for the progress bar
  useEffect(() => {
    // Start with 0 and animate to the actual value
    setAnimatedProficiency(0);
    const timer = setTimeout(() => {
      setAnimatedProficiency(normalizedProficiency);
    }, 300); // Small delay for visual effect
    
    return () => clearTimeout(timer);
  }, [normalizedProficiency]);

  const getIcon = () => {
    if (!icon) return FaIcons.FaCode;

    return (FaIcons as any)[icon] || (SiIcons as any)[icon] || FaIcons.FaCode;
  };

  const Icon = getIcon();

  // Render the root node
  if (id == 'root') {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        css={[rootNodeContainer, isHovered && hoverStyles]}
      >        
        {/* Profile Picture */}
        <img 
          src={profileUrl}
          alt={data.label} 
          css={{ width: '200px', height: '80%', marginBottom: 10, borderRadius: '8px' }}
        />

        <div css={nodeContent}>
          <h3>👋 Hi, I&apos;m David M. Jentjens</h3>
          <p>Front-End Engineer & QA Manager with 6+ years of React experience</p>
          <p>This interactive skill tree visualizes my technical expertise and experience. Each node represents a technology or skill in my toolkit.</p>
          <p>Click around to explore my capabilities and see how they connect!</p>
        </div>
        
        {/* Expand/Collapse Button for Root Node */}
        {childCount > 0 && (
          <Button
            css={rootNodeToggleButton}
            size='small'
            variant='minimal'
            onClick={() => setShowingChildren?.(!showingChildren)}
            icon={showingChildren ? 'chevron-up' : 'chevron-down'}
          />
        )}
        
        <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
      </div>
    );
  }

  // Render regular nodes
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={[nodeContainer, isHovered && hoverStyles]}
    >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      
      {/* Child count badge */}
      {childCount > 0 && !showingChildren && (
        <div css={childCountBadge}>
          {childCount}
        </div>
      )}
      
      <FlexColumn css={[fullSize]}>
        <div css={headerContainer}>
          <Icon css={nodeIcon} size={24} className="text-white" />
          {proficiencyLevel && 
          <div css={progressBarContainer}>
            <div css={progressBarFill(animatedProficiency)} />
          </div>}
        </div>
        <div css={[flex1, nodeContent]}>
          <div css={nodeLabel}>{data.label}</div>
          {data.subLabel && <div css={nodeSubLabel}>{data.subLabel}</div>}

          <div css={nodeMetadata}>Descendants: {descendantsCount}</div>
          {normalizedProficiency > 0 && (
            <div css={nodeMetadata}>Proficiency: {normalizedProficiency}%</div>
          )}
        </div>
        {childCount > 0 && 
          <Button
            css={toggleButton}
            size='small'
            variant='minimal'
            onClick={() => setShowingChildren?.(!showingChildren)}
            icon={showingChildren ? 'chevron-up' : 'chevron-down'}
          />
        }
      </FlexColumn>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
});