// src/components/TreeNode/RegularNode/index.tsx
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { Handle, Position } from "reactflow";

import { TreeViewData } from "../../../utils/nodes-edges";
import { NodeContent, ToggleButton } from "../styles";
import {
  ChildCountBadge,
  DescendantsCountBadge,
  FlexColumnStyled,
  HeaderContainer,
  NodeContainer,
  NodeIcon,
  NodeLabel,
  NodeMetadata,
  NodeSubLabel,
  ProgressBarContainer,
  ProgressBarFill,
} from "./styles";

interface RegularNodeProps {
  data: TreeViewData;
  isConnectable: boolean;
  childCount: number;
  descendantsCount: number;
}

export const RegularNode = observer(
  ({ data, isConnectable, childCount, descendantsCount }: RegularNodeProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animatedProficiency, setAnimatedProficiency] = useState(0);

    const { showingChildren, setShowingChildren, icon, proficiencyLevel } =
      data;

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

      return (
        (FaIcons as never)[icon] || (SiIcons as never)[icon] || FaIcons.FaCode
      );
    };

    const Icon = getIcon();

    return (
      <NodeContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top handle for connecting edges */}
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />

        {/* Descendant count badge */}
        {descendantsCount > 0 && (
          <DescendantsCountBadge>
            {descendantsCount} desc.
          </DescendantsCountBadge>
        )}

        {/* Child count badge */}
        {childCount > 0 && !showingChildren && (
          <ChildCountBadge>{childCount} children</ChildCountBadge>
        )}

        <FlexColumnStyled>
          {/* Header with icon and proficiency bar, if applicable */}
          <HeaderContainer>
            <NodeIcon>
              <Icon size={24} />
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

          {/* Node label and metadata */}
          <NodeContent>
            <NodeLabel>{data.label}</NodeLabel>
            {data.subLabel && <NodeSubLabel>{data.subLabel}</NodeSubLabel>}

            {/* Metadata for additional information */}
            {data.details && (
              <NodeMetadata>Description: {data.details}</NodeMetadata>
            )}
            {normalizedProficiency > 0 && (
              <NodeMetadata>Proficiency: {normalizedProficiency}%</NodeMetadata>
            )}
          </NodeContent>

          {/* Expand node button */}
          {childCount > 0 && (
            <ToggleButton
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

        {/* Bottom handle for connecting edges */}
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </NodeContainer>
    );
  }
);
