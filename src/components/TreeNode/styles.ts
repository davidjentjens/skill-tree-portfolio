// src/components/TreeNode/styles.ts
import { styled } from "@stitches/react";

// Constants for the node dimensions (used by both nodes and layout)
export const treeNodeWidth = 272;
export const treeNodeHeight = 260;

// Shared components
export const NodeContent = styled("div", {
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const CustomButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "none",
  outline: "none",

  variants: {
    variant: {
      minimal: {
        background: "transparent",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    size: {
      small: {
        padding: "4px 8px",
        fontSize: "12px",
      },
    },
  },
});

export const ToggleButton = styled("button", {
  position: "absolute",
  bottom: 8,
  marginTop: 10,
  right: "calc(50% - 12px)",
  color: "#ffffff",
  borderRadius: "40%",
  padding: "6px 8px",
  transition: "background-color 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "none",
  outline: "none",

  backgroundColor: "#31425a",

  "&:hover": {
    backgroundColor: "#b7ceff6d",
  },
});

// Base node styling that can be extended
export const BaseNodeContainer = styled("div", {
  borderRadius: 8,
  background: "#1f2937",
  cursor: "pointer",
  position: "relative",
  transition: "box-shadow 0.2s ease, border 0.2s ease",
  border: "2px solid transparent",

  variants: {
    isHovered: {
      true: {
        boxShadow: "inset 0 0 25px rgba(0, 98, 255, 0.4)",
        border: "2px solid rgba(59, 130, 246, 0.6)",
      },
    },
  },
});
