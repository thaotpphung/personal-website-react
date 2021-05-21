import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { theme } from "./theme";
import { useStyles } from "./styles";


import { ThemeProvider } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="overline" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Thao Phung
      </Link>{" "}
      {new Date().getFullYear()}
      
    </Typography>
  );
}

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container className={classes.container} maxWidth="lg">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/education" exact component={Education} />
            <Route path="/experience" exact component={Experience} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
