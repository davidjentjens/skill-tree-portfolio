// src/components/ui/ColorLegend/styles.ts
import { styled } from "@stitches/react";

export const LegendContainer = styled("div", {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: "rgba(30, 39, 46, 0.85)",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 100,
  maxWidth: "220px",
});

export const LegendTitle = styled("h3", {
  color: "rgba(255, 255, 255, 0.95)",
  fontSize: "16px",
  marginBottom: "12px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  paddingBottom: "5px",
});

export const ColorItem = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
});

export const ColorBox = styled("div", {
  width: "16px",
  height: "16px",
  borderRadius: "3px",
  marginRight: "10px",
});

export const ColorText = styled("span", {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "14px",
});
