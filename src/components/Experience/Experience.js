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
                <Grid key={job.id} item container spacing={2}>
                  <Grid item xs={12} sm={4} container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      spacing={2}
                      align="center"
                    >
                      <Grid item>
                        <Typography variant="h6">{job.company}</Typography>
                      </Grid>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img className={classes.img} alt={job.title} src={job.logo} />
                        </ButtonBase>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          {job.location}
                        </Typography>
                        <Typography variant="subtitle1">
                          {job.startDate} - {job.endDate}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={8} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          {job.title}
                        </Typography>
                          <ul>
                            {job.responsibilities.map((line) => {
                              return (<li key={line}>{line}</li>);
                            })}
                          </ul>
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
