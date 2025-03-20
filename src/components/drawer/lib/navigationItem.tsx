import { Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { AppRoutes } from "../../../views/root/AppRoutes";
import { useNavigate } from "react-router-dom";

export type NavigationItemProps = {
  title: string;
  appRoute: AppRoutes;
  icon: string;
  active: boolean;
  showTitle?: boolean;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  appRoute,
  icon,
  active,
  showTitle = true,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(appRoute);
  };
  return (
    <IconButton
      sx={{
        borderRadius: "4px",
        fontSize: "1rem",
        gap: "1rem",
        p: "0.5rem 0.7rem",
        justifyContent: "flex-start",
        svg: {
          minWidth: "24px",
        },
      }}
      className={active ? "active" : ""}
      aria-label={title}
      onClick={handleOnClick}
    >
      <Icon icon={icon} width="24px" />
      <Box
        sx={{
          display: showTitle ? "block" : "none",
          animation: "fadeTitle 250ms ease-in-out both",
          "@keyframes fadeTitle": {
            "0%": {
              opacity: 0,
              transform: "translateX(-30px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
      >
        {title}
      </Box>
    </IconButton>
  );
};
