import { JSX } from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material";

const cinnoberRed = {
  100: "#EBCCBD",
  200: "#D7A08E",
  300: "#BF7361",
  400: "#A2453D",
  500: "#801d1f",
  600: "#6D1E17",
  700: "#5A1F12",
  800: "#461D0D",
  900: "#321908",
} as const;

// 👇 Custom theme to extend the base theme
const kibblesTheme = (theme: Theme) =>
  createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      primary: cinnoberRed,
    },
  });

// 👇 Wrapped by an outer theme provider
export const MuiThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={kibblesTheme}>{children}</ThemeProvider>;
};
