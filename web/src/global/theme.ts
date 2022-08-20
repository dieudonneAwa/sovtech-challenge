const colors = {
  primaryBlue: "#0070f3",
  primaryBg: "#16181D",
  white: "#FFFFFF",
  black: "#000000",
  divider: "#2D313E",
  card: "#242731",
  gray: "#bfc1c4",
};

export const size = {
  none: "0rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
};

const font = {
  family: {
    default:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  size,
};

const theme = {
  colors,
  font,
};

export type DefaultTheme = typeof theme;

export default theme;
