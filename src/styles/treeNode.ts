import { CSSObject } from '@emotion/react';

// Constants for the node dimensions
export const treeNodeWidth = 272;
export const treeNodeHeight = 260;

export const nodeContainer: CSSObject = {
  padding: 16,
  borderRadius: 8,
  background: '#1f2937',
  cursor: 'pointer',
  width: treeNodeWidth,
  height: treeNodeHeight,
  transition: 'box-shadow 0.2s ease, border 0.2s ease',
  position: 'relative',
  border: '2px solid transparent',
};

export const hoverStyles: CSSObject = {
  boxShadow: 'inset 0 0 25px rgba(0, 98, 255, 0.4)',
  border: '2px solid rgba(59, 130, 246, 0.6)',
};

export const nodeIcon: CSSObject = {
  color: 'white',
};

export const headerContainer: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10,
  width: '100%',
};

export const progressBarContainer: CSSObject = {
  height: 6,
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 3,
  marginLeft: 12,
  flex: 1,
  overflow: 'hidden',
};

export const progressBarFill: (normalizedProficiency: number) => CSSObject = (
  normalizedProficiency,
) => ({
  height: '100%',
  width: `${normalizedProficiency}%`,
  background: getProgressColor(normalizedProficiency),
  borderRadius: 3,
  transition: 'width 1s ease-in-out',
});

export const nodeContent: CSSObject = {
  color: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const nodeLabel: CSSObject = {
  fontSize: '1.125rem',
  fontWeight: 500,
};

export const nodeSubLabel: CSSObject = {
  fontSize: '0.75rem',
  color: '#9ca3af',
};

export const nodeMetadata: CSSObject = {
  fontSize: '0.875rem',
};

export const toggleButton: CSSObject = {
  alignSelf: 'center',
  marginTop: '8px',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  borderRadius: '9999px',
  padding: '8px',
};

// Helper function to get color based on proficiency level
function getProgressColor(proficiency: number): string {
  if (proficiency < 30) return '#ef4444'; // Red for low proficiency
  if (proficiency < 70) return '#f59e0b'; // Amber for medium proficiency
  return '#10b981'; // Green for high proficiency
}

export const childCountBadge: CSSObject = {
  position: 'absolute',
  bottom: 10,
  right: 10,
  backgroundColor: '#3b82f6',
  color: 'white',
  borderRadius: '50%',
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  zIndex: 5,
};

export const rootNodeContainer: CSSObject = {
  borderRadius: 12,
  background: '#1f2937',
  cursor: 'pointer',
  padding: '16px',
  gap: '18px',
  width: 600,
  minHeight: treeNodeHeight,
  transition: 'box-shadow 0.2s ease, border 0.2s ease',
  border: '2px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const rootNodeToggleButton: CSSObject = {
  position: 'fixed',
  bottom: 10,
  right: 'calc(50% - 12px)',
  color: '#ffffff',
  borderRadius: '9999px',
  padding: '6px',
};
