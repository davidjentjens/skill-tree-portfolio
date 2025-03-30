// components/ui/Footer.tsx
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  FooterContent,
  FooterDivider,
  FooterLink,
  FooterText,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Built for the Outlier AI Hackathon using React, TypeScript, react-flow
          and dagrejs.
        </FooterText>
        <FooterDivider />
        <FooterLink
          href="https://github.com/davidjentjens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </FooterLink>
        <FooterLink
          href="https://linkedin.com/in/davidjentjens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </FooterLink>
        <FooterLink href="mailto:davidjentjens@gmail.com">
          <FaEnvelope />
        </FooterLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
