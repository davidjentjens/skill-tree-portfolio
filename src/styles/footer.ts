import { CSSObject } from "@emotion/react";

// Updated styles with bigger text
export const footer: CSSObject = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "8px 0",
  background: "transparent",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  fontSize: "0.85rem", // Increased from 0.75rem
};

export const footerContent: CSSObject = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

export const footerText: CSSObject = {
  color: "rgba(156, 163, 175, 0.8)",
};

export const footerLink: CSSObject = {
  color: "rgba(156, 163, 175, 0.8)",
  textDecoration: "none",
  transition: "color 0.2s ease",
  fontSize: "1rem", // Increased from 0.875rem
  "&:hover": {
    color: "#3b82f6",
  },
};

export const footerDivider: CSSObject = {
  height: "12px",
  width: "1px",
  background: "rgba(156, 163, 175, 0.5)",
};
