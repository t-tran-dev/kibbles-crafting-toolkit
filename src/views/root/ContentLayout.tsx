import { Outlet } from "react-router-dom";
import { Box, styled, CssBaseline, useTheme } from "@mui/material";
import { Drawer } from "../../components/drawer";
import { useState } from "react";
import { Header } from "../../components/header";

export const ContentLayout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <ContentLayoutRoot>
      <CssBaseline />
      <Header
        title="Kibbles Crafting Toolkit"
        open={open}
        updateOpen={setOpen}
      />
      <Drawer open={open} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: theme.spacing(2),
        }}
      >
        <ContentHeader />
        <Outlet />
      </Box>
    </ContentLayoutRoot>
  );
};

const ContentLayoutRoot = styled("div")({
  display: "flex",
  height: "100%",
  minHeight: "100vh",
  width: "100vw",
  overflow: "hidden",
  background: "#f5f5f5",
  "& .MuiIconButton-root:focus": {
    outline: "none",
  },
});

const ContentHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
