import React from "react";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

import TrumanLogo from "../../img/logos/truman_logo.webp";

const Education = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
      {/* <Card className={classes.card}> */}
        <Grid container spacing={2}>
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
                <Typography variant="h6">Truman State University</Typography>
              </Grid>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={TrumanLogo} />
                </ButtonBase>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Kirksville, MO</Typography>
                <Typography variant="substitle1">Aug 2017 - Dec 2021</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  B.S in Computer Science, minor in Mathematics
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  GPA: 3.93/4.00
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Activities:
                  <Typography
                    color="textSecondary"
                    className={classes.subDescription}
                    variant="subtitle2"
                  >
                    <ul>
                      <li>Association for Computing Machinery</li>
                      <li>Tru Woman in Computer Science</li>
                      <li>Vietnamese Student Association</li>
                      <li>Japanese Language Exchange Group</li>
                      <li>International Collegiate Programming Contest</li>
                    </ul>
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Relevant Coursework:
                  <Typography
                    color="textSecondary"
                    className={classes.subDescription}
                    variant="subtitle2"
                  >
                    <ul>
                      <li>Data Structure and Algorithms</li>
                      <li>Computing Structures </li>
                      <li>Systems Programming </li>
                      <li>ComputerArchitecture and Organization</li>
                      <li>Internet Programming</li>
                      <li>Foundation of Computer Science</li>
                      <li>UI Design </li>
                      <li>Object-Oriented Design </li>
                      <li>Computer Networks </li>
                      <li>Artificial Intelligence </li>
                      <li>Software Engineering </li>
                      <li>Discrete Mathematics </li>
                      <li>Ordinary Differential Equation</li>
                      <li>Linear Algebra </li>
                    </ul>
                  </Typography>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Achievements:
                  <Typography
                    color="textSecondary"
                    className={classes.subDescription}
                    variant="subtitle2"
                  >
                    <ul>
                      <li>President Honor Scholarship
                      </li>
                      <li>President/Vice President List</li>
                    </ul>
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Card> */}
      </Container>
    </div>
  );
};

export default Education;
