// styles.ts
import { styled } from "@stitches/react";

// Constants for the node dimensions
export const treeNodeWidth = 272;
export const treeNodeHeight = 260;

// TreeNode styles
export const NodeContainer = styled("div", {
  padding: 16,
  borderRadius: 8,
  background: "#1f2937",
  cursor: "pointer",
  width: treeNodeWidth,
  height: treeNodeHeight,
  transition: "box-shadow 0.2s ease, border 0.2s ease",
  position: "relative",
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

export const NodeIcon = styled("div", {
  color: "white",
});

export const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: 10,
  width: "100%",
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

export const NodeContent = styled("div", {
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
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

export const ChildCountBadge = styled("div", {
  position: "absolute",
  bottom: 10,
  right: 10,
  backgroundColor: "#3b82f6",
  color: "white",
  borderRadius: "50%",
  width: 24,
  height: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  zIndex: 5,
});

export const RootNodeContainer = styled("div", {
  borderRadius: 12,
  background: "#1f2937",
  cursor: "pointer",
  padding: "16px",
  gap: "18px",
  width: 600,
  minHeight: treeNodeHeight,
  transition: "box-shadow 0.2s ease, border 0.2s ease",
  border: "2px solid transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    isHovered: {
      true: {
        boxShadow: "inset 0 0 25px rgba(0, 98, 255, 0.4)",
        border: "2px solid rgba(59, 130, 246, 0.6)",
      },
    },
  },
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

export const ToggleButton = styled(CustomButton, {
  position: "absolute",
  bottom: 10,
  right: "calc(50% - 12px)",
  color: "#ffffff",
  borderRadius: "9999px",
  padding: "6px",
  backgroundColor: "#3b82f6",
});

export const FlexColumnStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const ProfileImage = styled("img", {
  width: "200px",
  height: "80%",
  marginBottom: 10,
  borderRadius: "8px",
});
