// src/components/TreeNode/RootNode/index.tsx
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";

import profileUrl from "../../../assets/pp.jpeg";
import { useLegend } from "../../../context/LegendContext";
import { TreeViewData } from "../../../utils/nodes-edges";
import { NodeContent } from "../styles";
import {
  ContentWrapper,
  GetStartedButton,
  ProfileImage,
  RootNodeContainer,
} from "./styles";

interface RootNodeProps {
  data: TreeViewData;
  isConnectable: boolean;
  childCount: number;
}

export const RootNode = observer(
  ({ data, isConnectable, childCount }: RootNodeProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const { showingChildren, setShowingChildren } = data;
    const { toggleLegend } = useLegend();

    const handleGetStarted = () => {
      setShowButton(false);
      // Wait for the fade-out animation to complete before expanding the tree
      setTimeout(() => {
        toggleLegend();
        setShowingChildren?.(true);
      }, 500); // Match this with the fadeOut animation duration
    };

    return (
      <RootNodeContainer
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Wrapper for profile image and content side by side */}
        <ContentWrapper>
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
        </ContentWrapper>

        {/* Get Started Button below the content wrapper */}
        {childCount > 0 && !showingChildren && (
          <GetStartedButton onClick={handleGetStarted} visible={showButton}>
            Get Started
          </GetStartedButton>
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
