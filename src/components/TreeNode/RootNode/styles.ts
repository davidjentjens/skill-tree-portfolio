// src/components/TreeNode/RootNode/styles.ts
import { styled } from "@stitches/react";

import { BaseNodeContainer, treeNodeHeight } from "../styles";

export const RootNodeContainer = styled(BaseNodeContainer, {
  borderRadius: 12,
  padding: "16px",
  gap: "18px",
  width: 600,
  minHeight: treeNodeHeight,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ProfileImage = styled("img", {
  width: "200px",
  height: "80%",
  marginBottom: 10,
  borderRadius: "8px",
});
