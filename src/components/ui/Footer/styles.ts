// styles/footer.ts
import { styled } from "@stitches/react";

export const FooterContainer = styled("footer", {
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
  fontSize: "0.85rem",
});

export const FooterContent = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const FooterText = styled("span", {
  color: "rgba(112, 117, 127, 0.8)",
});

export const FooterLink = styled("a", {
  color: "rgba(112, 117, 127, 0.8)",
  textDecoration: "none",
  transition: "color 0.2s ease",
  fontSize: "1rem",
  "&:hover": {
    color: "#3b82f6",
  },
});

export const FooterDivider = styled("div", {
  height: "12px",
  width: "1px",
  background: "rgba(112, 117, 127, 0.8)",
});
