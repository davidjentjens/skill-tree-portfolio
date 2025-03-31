// src/components/TreeNode/RegularNode/styles.ts
import { styled } from "@stitches/react";

import { BaseNodeContainer, treeNodeHeight, treeNodeWidth } from "../styles";

export const NodeContainer = styled(BaseNodeContainer, {
  padding: 16,
  width: treeNodeWidth,
  maxHeight: treeNodeHeight,
});

export const FlexColumnStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: 10,
  width: "100%",
});

export const NodeIcon = styled("div", {
  color: "white",
});

export const ProgressBarContainer = styled("div", {
  height: 6,
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: 3,
  marginLeft: 12,
  flex: 1,
  overflow: "hidden",
});

export const ProgressBarFill = styled("div", {
  height: "100%",
  borderRadius: 3,
  transition: "width 1s ease-in-out",

  variants: {
    level: {
      low: { background: "#ef4444" },
      medium: { background: "#f59e0b" },
      high: { background: "#10b981" },
    },
  },
});

export const NodeLabel = styled("div", {
  fontSize: "1.125rem",
  fontWeight: 500,
});

export const NodeSubLabel = styled("div", {
  fontSize: "0.75rem",
  color: "#9ca3af",
});

export const NodeMetadata = styled("div", {
  fontSize: "0.875rem",
});

export const CountBadge = styled("div", {
  position: "absolute",
  color: "white",
  padding: "4px 8px",
  borderRadius: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  zIndex: 5,
});

export const ChildCountBadge = styled(CountBadge, {
  bottom: 10,
  right: 10,
  backgroundColor: "#3b82f6",
});

export const DescendantsCountBadge = styled(CountBadge, {
  bottom: 10,
  left: 10,
  backgroundColor: "#de8f4a",
});
