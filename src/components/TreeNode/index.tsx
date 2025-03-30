import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Handle, NodeProps, Position, useNodeId } from "reactflow";

import profileUrl from "../../assets/pp.jpeg";
import { useTreeHandler } from "../../models/TreeHandler";
import { TreeViewData } from "../../utils/nodes-edges";
import {
  ChildCountBadge,
  FlexColumnStyled,
  HeaderContainer,
  NodeContainer,
  NodeContent,
  NodeIcon,
  NodeLabel,
  NodeMetadata,
  NodeSubLabel,
  ProfileImage,
  ProgressBarContainer,
  ProgressBarFill,
  RootNodeContainer,
  ToggleButton,
} from "./styles";

export const rootNodeSize = 150; // Set a size for the root node

export type TreeNodeProps = NodeProps<TreeViewData>;

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

  const normalizedProficiency = Math.min(
    Math.max(proficiencyLevel || 0, 0),
    100
  );

  // Determine proficiency level for styling
  const getProficiencyLevel = () => {
    if (normalizedProficiency < 30) return "low";
    if (normalizedProficiency < 70) return "medium";
    return "high";
  };

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
  if (id == "root") {
    return (
      <RootNodeContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Picture */}
        <ProfileImage src={profileUrl} alt={data.label} />

        <NodeContent>
          <h3>👋 Hi, I&apos;m David M. Jentjens</h3>
          <p>
            Front-End Engineer & QA Manager with 6+ years of React experience
          </p>
          <p>
            This interactive skill tree visualizes my technical expertise and
            experience. Each node represents a technology or skill in my
            toolkit.
          </p>
          <p>
            Click around to explore my capabilities and see how they connect!
          </p>
        </NodeContent>

        {/* Expand/Collapse Button for Root Node */}
        {childCount > 0 && (
          <ToggleButton
            size="small"
            variant="minimal"
            onClick={() => setShowingChildren?.(!showingChildren)}
          >
            {showingChildren ? (
              <FaIcons.FaChevronUp />
            ) : (
              <FaIcons.FaChevronDown />
            )}
          </ToggleButton>
        )}

        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </RootNodeContainer>
    );
  }

  // Render regular nodes
  return (
    <NodeContainer
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      {/* Child count badge */}
      {childCount > 0 && !showingChildren && (
        <ChildCountBadge>{childCount}</ChildCountBadge>
      )}

      <FlexColumnStyled>
        <HeaderContainer>
          <NodeIcon>
            <Icon size={24} className="text-white" />
          </NodeIcon>
          {proficiencyLevel && (
            <ProgressBarContainer>
              <ProgressBarFill
                level={getProficiencyLevel()}
                style={{ width: `${animatedProficiency}%` }}
              />
            </ProgressBarContainer>
          )}
        </HeaderContainer>
        <NodeContent>
          <NodeLabel>{data.label}</NodeLabel>
          {data.subLabel && <NodeSubLabel>{data.subLabel}</NodeSubLabel>}

          <NodeMetadata>Descendants: {descendantsCount}</NodeMetadata>
          {normalizedProficiency > 0 && (
            <NodeMetadata>Proficiency: {normalizedProficiency}%</NodeMetadata>
          )}
        </NodeContent>
        {childCount > 0 && (
          <ToggleButton
            size="small"
            variant="minimal"
            onClick={() => setShowingChildren?.(!showingChildren)}
          >
            {showingChildren ? (
              <FaIcons.FaChevronUp />
            ) : (
              <FaIcons.FaChevronDown />
            )}
          </ToggleButton>
        )}
      </FlexColumnStyled>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </NodeContainer>
  );
});
