import { Theme, makeStyles, createStyles, fade } from "@material-ui/core";

const drawerWidth = 240;

export const DrawerNavigationStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    background: theme.palette.primary.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: theme.palette.primary.main,
    overflowX: "hidden",
    width: theme.spacing(7),
  },
  logoIcon: {
    color: theme.palette.secondary.main,
    minWidth: "38px",
  },
  logoText: {
    fontSize: 18,
    color: fade("#fff", 0.9),
  },
  divider: {
    backgroundColor: fade("#fff", 0.4),
  },
}));
