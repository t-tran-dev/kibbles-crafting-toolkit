import { PaletteOptions } from "@mui/material";

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

export const palette: PaletteOptions = {
  primary: cinnoberRed,
};
