import React from "react";
import useStyles from "./styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { projects } from "../../data/projects";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6">
                    {project.title}
                    </Typography>
                    <Typography>
                    {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.button} href={project.github} size="small">
                      Github
                    </Button>
                    <Button className={classes.button} href={project.demo} size="small">
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
};

export default Projects;
