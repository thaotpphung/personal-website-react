import React from "react";
import useStyles from "./styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import { navs } from "../../data/navs";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="primary">
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
         { navs.map((nav) => {
            return (
              <Tab
                component={Link}
                to={nav.to}
                label={nav.label}
                icon={nav.icon}
              />
            )
          })};
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;
