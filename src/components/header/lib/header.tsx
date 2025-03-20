import {
  IconButton,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

type AppBarProps = {
  open?: boolean;
  updateOpen?: (open: boolean) => void;
} & MuiAppBarProps;

export const Header = ({ open, updateOpen, title, ...rest }: AppBarProps) => {
  const handleDrawerClick = () => {
    if (!updateOpen) return;
    updateOpen(!open);
  };
  return (
    <AppBar position="fixed" open={open} {...rest}>
      <Toolbar>
        <IconButton
          aria-label="toggle drawer"
          onClick={handleDrawerClick}
          edge="start"
          sx={{ mr: 2, color: "common.white" }}
        >
          <Icon icon={open ? "mdi:hamburger-open" : "mdi:hamburger-menu"} />
        </IconButton>
        <Typography variant="h6" noWrap component="div" color="common.white">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
}));
