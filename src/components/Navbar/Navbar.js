import React from "react";
import useStyles from "./styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import { navs } from "../../data/navs";

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}


const Navbar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Tabs
        value={value}
        onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          aria-label="scrollable force tabs example"
        >
         { navs.map((nav) => {
            return (
              <Tab
                key={nav.id}
                component={Link}
                to={nav.to}
                label={nav.label}
                icon={nav.icon}
                {...a11yProps(nav.id)}
              />
            )
          })};
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;
