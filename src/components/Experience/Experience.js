import React from "react";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";

import { experiences } from "../../data/experiences";

const Experience = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container direction="column" spacing={5}>
          {experiences.map((job) => {
            return (
              <Grid item container spacing={2}>
                <Grid item xs={4} container>
                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    spacing={2}
                    align="center"
                  >
                    <Grid item>
                      <Typography variant="h5">{job.company}</Typography>
                    </Grid>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} src={job.logo} />
                      </ButtonBase>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">{job.location}</Typography>
                      <Typography variant="substitle1">
                        {job.startDate} - {job.endDate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={8} container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h5">
                        {job.title}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <ul>
                        {job.responsibilities.map((line) => {
                          return <li>{line}</li>
                        })}
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Experience;
