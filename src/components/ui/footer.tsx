// components/ui/Footer.tsx
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  footer,
  footerContent,
  footerDivider,
  footerLink,
  footerText,
} from '../../styles';

const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <div css={footerContent}>
        <span css={footerText}>
          Built for the Outlier AI Hackathon using React, TypeScript, react-flow and
          dagrejs.
        </span>
        <div css={footerDivider} />
        <a
          css={footerLink}
          href="https://github.com/davidjentjens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          css={footerLink}
          href="https://linkedin.com/in/davidjentjens"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a css={footerLink} href="mailto:davidjentjens@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
