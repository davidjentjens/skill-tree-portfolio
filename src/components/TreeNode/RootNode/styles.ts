// src/components/TreeNode/RootNode/styles.ts
import { keyframes } from "@emotion/react";
import { styled } from "@stitches/react";

import { BaseNodeContainer, treeNodeHeight } from "../styles";

export const RootNodeContainer = styled(BaseNodeContainer, {
  borderRadius: 12,
  padding: "16px",
  gap: "18px",
  width: 600,
  minHeight: treeNodeHeight,
  display: "flex",
  flexDirection: "column", // Column layout for container
  justifyContent: "center",
  alignItems: "center",
});

// New wrapper for horizontal content layout
export const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row", // Horizontal layout for image and text
  width: "100%",
  gap: "18px",
  alignItems: "center", // Align items vertically center
});

export const ProfileImage = styled("img", {
  width: "200px",
  height: "80%",
  borderRadius: "8px",
  objectFit: "cover", // Ensure image covers the area nicely
});

export const GetStartedButton = styled("button", {
  marginTop: "20px",
  padding: "10px 24px",
  backgroundColor: "#2a61ba80",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.2s ease, background-color 0.2s ease",

  "&:hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
  },

  variants: {
    visible: {
      false: {
        opacity: 0,
      },
    },
  },
});
