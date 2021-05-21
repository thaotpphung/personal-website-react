import React from "react";
import { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { useStyles } from "./styles";
import { theme } from "./styles";

import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const classes = useStyles();
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xbba6a8,
          shininess: 0.0,
          waveHeight: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className={classes.root}>
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
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
