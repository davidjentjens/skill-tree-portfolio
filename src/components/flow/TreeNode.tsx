import { Handle, NodeProps, Position, useNodeId } from 'reactflow';
import { TreeViewData } from '../../data/nodes-edges';
import { Button } from '@blueprintjs/core';
import { FlexColumn } from '../base/Flex';
import { flex1, fullSize } from '../../styles';
import { observer } from 'mobx-react-lite';
import { useTreeHandler } from '../../models/TreeHandler';
import { useState } from 'react';

export const treeNodeWidth = 272;
export const treeNodeHeight = 220;

export type TreeNodeProps = NodeProps<TreeViewData>

export const TreeNode = observer((props: TreeNodeProps) => {
  const treeHandler = useTreeHandler();
  const [isHovered, setIsHovered] = useState(false);
  
  const nodeId = useNodeId();
  const node = treeHandler.getNodeById(nodeId);

  const childCount = node ? treeHandler.getChildrenCount(node) : 0;
  const descendantsCount = node ? treeHandler.getDescendantsCount(node) : 0;

  const { data, isConnectable } = props;

  const { showingChildren, setShowingChildren } = data;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={{
        padding: 16, // p-4 equivalent
        borderRadius: 8, // rounded-lg equivalent
        background: '#1f2937', // bg-gray-800 equivalent
        cursor: 'pointer',
        width: treeNodeWidth,
        height: treeNodeHeight,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isHovered 
          ? '0 0 20px rgba(59, 130, 246, 0.6)' 
          : '0 0 0px rgba(59, 130, 246, 0)',
      }}
    >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <FlexColumn css={[fullSize]}>
        <div css={[
          flex1,
          {
            color: '#ffffff', // text-white equivalent
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }
        ]}>
          <div css={{ fontSize: '1.125rem', fontWeight: 500 }}>{data.label}</div>
          {data.subLabel && <div css={{ fontSize: '0.75rem', color: '#9ca3af' }}>{data.subLabel}</div>}

          <div css={{ fontSize: '0.875rem' }}>Children: {childCount}</div>
          <div css={{ fontSize: '0.875rem' }}>Descendants: {descendantsCount}</div>
        </div>
        <Button
          css={{ 
            alignSelf: 'center',
            marginTop: '8px',
            backgroundColor: '#3b82f6', // bg-blue-500 equivalent
            color: '#ffffff',
            borderRadius: '9999px',
            padding: '8px',
          }}
          small
          minimal
          onClick={() => setShowingChildren?.(!showingChildren)}
          icon={showingChildren ? 'chevron-up' : 'chevron-down'}
        />
      </FlexColumn>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
});