import { Drawer as MuiDrawer, CSSObject, styled, Theme } from "@mui/material";
import { Navigation } from "./navigation";

export const DEFAULT_DRAWER_WIDTH = 240;

type DrawerProps = {
  open: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({ open }) => {
  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader />
      <DrawerSectionHeading open={open}>Tools</DrawerSectionHeading>
      <Navigation showTitle={open} />
    </StyledDrawer>
  );
};

export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: DEFAULT_DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
  "& .MuiDrawer-paper": {
    padding: theme.spacing(1),
  },
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DrawerSectionHeading = styled("div")<{ open: boolean }>(
  ({ theme, open }) => ({
    ...theme.typography.overline,
    color: theme.palette.text.secondary,
    paddingInline: theme.spacing(1.5),
    textTransform: "uppercase",
    height: open ? "32px" : 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    transition: "height 225ms cubic-bezier(0.4, 0, 0.6, 1)",
  })
);

const openedMixin = (theme: Theme): CSSObject => ({
  width: DEFAULT_DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
