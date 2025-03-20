import { Box } from "@mui/material";
import { AppRoutes } from "../../../views/root/AppRoutes";
import { NavigationItem, NavigationItemProps } from "./navigationItem";

const NAVIGATION_CONFIG = [
  {
    title: "Dashboard",
    appRoute: AppRoutes.DASHBOARD,
    icon: "material-symbols:dashboard",
    active: false,
  },
  {
    title: "Recipe Workshop",
    appRoute: AppRoutes.RECIPE_WORKSHOP,
    icon: "fluent-mdl2:text-document-settings",
    active: false,
  },
] as NavigationItemProps[];

type NavigationProps = {
  showTitle?: boolean;
};

export const Navigation: React.FC<NavigationProps> = ({ showTitle = true }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {NAVIGATION_CONFIG.map((item) => (
        <NavigationItem key={item.title} showTitle={showTitle} {...item} />
      ))}
    </Box>
  );
};
