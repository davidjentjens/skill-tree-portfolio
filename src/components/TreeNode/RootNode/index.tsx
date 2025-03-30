// src/components/TreeNode/RootNode/index.tsx
import { observer } from "mobx-react-lite";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Handle, Position } from "reactflow";

import profileUrl from "../../../assets/pp.jpeg";
import { TreeViewData } from "../../../utils/nodes-edges";
import { NodeContent, ToggleButton } from "../styles";
import { ProfileImage, RootNodeContainer } from "./styles";

interface RootNodeProps {
  data: TreeViewData;
  isConnectable: boolean;
  childCount: number;
}

export const RootNode = observer(
  ({ data, isConnectable, childCount }: RootNodeProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { showingChildren, setShowingChildren } = data;

    return (
      <RootNodeContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Picture */}
        <ProfileImage src={profileUrl} alt={data.label} />

        {/* Node Header */}
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
          <ToggleButton onClick={() => setShowingChildren?.(!showingChildren)}>
            {showingChildren ? (
              <FaIcons.FaChevronUp />
            ) : (
              <FaIcons.FaChevronDown />
            )}
          </ToggleButton>
        )}

        {/* Bottom handle for connecting edges */}
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </RootNodeContainer>
    );
  }
);
