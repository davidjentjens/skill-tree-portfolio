// src/utils/colorMap.ts
export type CategoryType =
  | "education"
  | "experience"
  | "frontend"
  | "backend"
  | "devops"
  | "database"
  | "language"
  | "management"
  | "neutral";

export interface ColorConfig {
  main: string;
  lighter: string;
  darker: string;
  text: string;
}

export const categoryColors: Record<CategoryType, ColorConfig> = {
  education: {
    main: "rgba(75, 0, 130, 0.85)", // Indigo (distinct purple)
    lighter: "rgba(75, 0, 130, 0.7)",
    darker: "rgba(75, 0, 130, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  experience: {
    main: "rgba(0, 90, 170, 0.85)", // Strong blue
    lighter: "rgba(0, 90, 170, 0.7)",
    darker: "rgba(0, 90, 170, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  frontend: {
    main: "rgba(0, 128, 0, 0.85)", // Green
    lighter: "rgba(0, 128, 0, 0.7)",
    darker: "rgba(0, 128, 0, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  backend: {
    main: "rgba(25, 25, 112, 0.85)", // Midnight Blue
    lighter: "rgba(25, 25, 112, 0.7)",
    darker: "rgba(25, 25, 112, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  devops: {
    main: "rgba(210, 105, 30, 0.85)", // Chocolate
    lighter: "rgba(210, 105, 30, 0.7)",
    darker: "rgba(210, 105, 30, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  database: {
    main: "rgba(32, 178, 170, 0.85)", // Light Sea Green
    lighter: "rgba(32, 178, 170, 0.7)",
    darker: "rgba(32, 178, 170, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  language: {
    main: "rgba(220, 20, 60, 0.85)", // Crimson (completely different from education)
    lighter: "rgba(220, 20, 60, 0.7)",
    darker: "rgba(220, 20, 60, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  management: {
    main: "rgba(128, 0, 0, 0.85)", // Maroon
    lighter: "rgba(128, 0, 0, 0.7)",
    darker: "rgba(128, 0, 0, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
  neutral: {
    main: "rgba(70, 70, 70, 0.85)", // Dark gray
    lighter: "rgba(70, 70, 70, 0.7)",
    darker: "rgba(70, 70, 70, 0.95)",
    text: "rgba(255, 255, 255, 1)",
  },
};

export const getCategoryColor = (category?: CategoryType): ColorConfig => {
  if (!category || !categoryColors[category]) {
    return categoryColors.neutral;
  }

  return categoryColors[category];
};
