import * as React from "react";
import clsx from "clsx";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Icon,
  Divider,
} from "@material-ui/core";
import { DrawerNavigationStyles } from "./DrawerNavigationStyles";

export function DrawerNavigation() {
  const classes = DrawerNavigationStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClosed = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="left"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClosed]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClosed]: !drawerOpen,
          }),
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon className={classes.logoIcon}>
              <IconButton
                edge="start"
                className={classes.logoIcon}
                onClick={drawerOpen ? handleDrawerClosed : handleDrawerOpen}
              >
                <Icon className="fa fa-square" />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={"LSAnalyzer"}
              classes={{ primary: classes.logoText }}
            />
          </ListItem>
        </List>

        <Divider variant="middle" classes={{ root: classes.divider }} />
      </Drawer>
    </div>
  );
}
