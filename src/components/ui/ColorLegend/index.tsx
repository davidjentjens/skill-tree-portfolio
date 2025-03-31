// src/components/ui/ColorLegend/index.tsx
import React from "react";

import { useLegend } from "../../../context/LegendContext";
import { categoryColors, CategoryType } from "../../../utils/colorMap";
import {
  ColorBox,
  ColorItem,
  ColorText,
  LegendContainer,
  LegendTitle,
} from "./styles";

export const ColorLegend: React.FC = () => {
  const { isLegendVisible } = useLegend();

  // If legend is not visible, don't render anything
  if (!isLegendVisible) return null;

  // Display names for each category
  const categoryDisplayNames: Record<CategoryType, string> = {
    education: "Education",
    experience: "Work Experience",
    frontend: "Frontend Development",
    backend: "Backend Development",
    devops: "DevOps & CI/CD",
    database: "Databases",
    language: "Languages",
    management: "Management Skills",
    neutral: "Mixed Categories", // Adding the neutral category
  };

  return (
    <LegendContainer>
      <LegendTitle>Skill Categories</LegendTitle>
      {(Object.keys(categoryColors) as CategoryType[]).map((category) => (
        <ColorItem key={category}>
          <ColorBox
            style={{ backgroundColor: categoryColors[category].main }}
          />
          <ColorText>{categoryDisplayNames[category]}</ColorText>
        </ColorItem>
      ))}
    </LegendContainer>
  );
};
