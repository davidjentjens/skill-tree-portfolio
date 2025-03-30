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
  }
);
