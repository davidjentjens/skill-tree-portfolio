// src/context/LegendContext.tsx
import React, { createContext, useContext, useState } from "react";

interface LegendContextType {
  isLegendVisible: boolean;
  toggleLegend: () => void;
  showLegend: () => void;
  hideLegend: () => void;
}

const LegendContext = createContext<LegendContextType | undefined>(undefined);

export const LegendProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLegendVisible, setIsLegendVisible] = useState(false);

  const toggleLegend = () => setIsLegendVisible((prev) => !prev);
  const showLegend = () => setIsLegendVisible(true);
  const hideLegend = () => setIsLegendVisible(false);

  return (
    <LegendContext.Provider
      value={{ isLegendVisible, toggleLegend, showLegend, hideLegend }}
    >
      {children}
    </LegendContext.Provider>
  );
};

export const useLegend = (): LegendContextType => {
  const context = useContext(LegendContext);
  if (context === undefined) {
    throw new Error("useLegend must be used within a LegendProvider");
  }
  return context;
};
