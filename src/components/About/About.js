import React from "react";
import useStyles from "./styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";


import Selfie from "../../img/me/selfie.jpeg";
import { link1, link2 } from "../../data/links";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <img className={classes.selfie} src={Selfie}></img>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Thao Phung
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Software Engineer / Web Developer
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am a senior at Truman State University majoring in Computer Science
          with a minor in Mathematics. Currently, I am seeking a job opportunity
          in software engineering/development role that will utilize my critical
          thinking, problem solving, and programming skills. Please feel free to
          contact me if you want to reach out or have any questions.
        </Typography>
        <br/>
        <Typography variant="body1">
          <Grid
            className="introduction"
            container
            spacing={10}
            justify="center"
          >
            <Grid item>
              {link1.map((link) => {
                const Icon = link.icon;
                return (
                  <Link className={classes.link} key={link.id} href={link.href}>
                   {link.icon} {link.title} {link.content} <br />
                  </Link>
                );
              })}
            </Grid>
            <Grid item>
              {link2.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.id} className={classes.link} href={link.href}>
                    {link.icon} {link.title} {link.content} <br />
                    </Link>
                  );
              })}
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
};

export default About;
