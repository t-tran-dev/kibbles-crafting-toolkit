import { JSX } from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { palette } from "./foundations";
// import { components } from "theme/components";

const themeOptions: Omit<ThemeOptions, "components"> = {
  palette: palette,
};

const theme: ThemeOptions = createTheme({
  ...themeOptions,
  // components: {
  //   ...components,
  // },
});

export const MuiThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
