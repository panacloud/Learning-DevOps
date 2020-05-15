import withRoot from "../utils/withRoot";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";
import Page from "../components/Page";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import style from "../css/program.css";

const styles = {
  cardMedia: {
    height: "200px",
  },
  pad: {
    padding: "0px !important",
  },
  card: {
    boxShadow: "0px 0px 18px rgba(0,0,0,0.2)",
    height: "170px",
  },
  cardStyle: {
    height: "400px",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerContent: {
    textAlign: "center",
  },
}));

const bgcolorTechnical = {
  boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  height: "180px",
  color: "white",
  backgroundColor: "rgba(25,42,86,.5)",
};
const bgcolorInnovation = {
  boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  height: "180px",
  backgroundColor: "rgba(25,42,86,.75)",
  color: "white",
};
const bgcolorApplicationDev = {
  boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
  height: "180px",
  backgroundColor: "#192a56",
  color: "white",
};
const bgcolor = { backgroundColor: "white" };
const titleColor = { color: "white" };
const ProgramDetails = (props) => {
  // All programs list
  const program = props.pageContext.program;
  const technicalTrack = program.technicalTrack;
  const innovationTrack = program.innovationTrack;
  const appDevelopmentTrack = program.appDevelopmentTrack;
  const { classes } = props;
  const classess = useStyles();

  useEffect(() => {});
  return (
    <Page title="Program of Study">
      <SEO title="Program of Study" />

      <div>
        <h1 className="program-title">
          Certified {program.title} Professional
        </h1>
        <Grid
          alignItems="flex-start"
          container
          direction="row"
          justify="center"
          spacing={4}
        >
          <Grid item key={"/programs/" + program.slug} md={12} xs={12}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={program.image.file.url}
              />
              <CardContent>
                <Typography
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>
                <br />
                <Typography
                  style={{ textAlign: "center" }}
                  component="h3"
                  gutterBottom
                  variant="h6"
                >
                  In order to receive the certification the student has to
                  complete three tracks (sequence of courses):
                </Typography>
                {/* <article> */}

                {/* </article> */}

                {/* Heading for Technical Track */}
                <br />
                <br />
                <Grid
                  item
                  alignItems="flex-start"
                  container
                  direction="row"
                  justify="center"
                  spacing={4}
                >
                  <Typography component="h3" gutterBottom variant="h5">
                    <Link to={"/programs/tracks/" + technicalTrack.slug}>
                      {technicalTrack.title} Course Sequence
                    </Link>
                  </Typography>
                </Grid>
                <br />
                <Grid container spacing={2}>
                  {technicalTrack.courses.map((course) => {
                    return (
                      <Grid
                        className="card-pad"
                        item
                        key={course.quarter}
                        md={3}
                        xs={12}
                      >
                        {/* <Paper className={classes.paper}> */}
                        <div className="card-pad" style={styles.pad}>
                          <Card
                            className="card-pad"
                            style={bgcolorTechnical}
                            className={classes.root}
                            variant="outlined"
                          >
                            <CardContent className={useStyles.centerContent}>
                              <Typography
                                className={classess.centerContent}
                                gutterBottom
                              >
                                Quarter {course.quarter}
                              </Typography>
                              <Typography variant="h5" component="h2">
                                {/* be{bull}nev{bull}o{bull}lent */}
                              </Typography>
                              <Typography
                                className={classes.pos}
                                color="textSecondary"
                              >
                                {/* adjective */}
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                className={classess.centerContent}
                              >
                                <Link
                                  style={titleColor}
                                  to={
                                    "/programs/tracks/courses/" +
                                    course.courseNumber
                                  }
                                >
                                  {course.title}
                                </Link>
                                {/* {'"a benevolent smile"'} */}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              {/* <Button size="small">See more</Button> */}
                            </CardActions>
                          </Card>
                        </div>
                        {/* </Paper> */}
                      </Grid>
                    );
                  })}
                </Grid>
                {/* Heading for innovation track */}
                <br />
                <br />
                <Grid
                  item
                  alignItems="flex-start"
                  container
                  direction="row"
                  justify="center"
                  spacing={4}
                >
                  <Typography component="h3" gutterBottom variant="h5">
                    <Link to={"/programs/tracks/" + innovationTrack.slug}>
                      {innovationTrack.title} Course Sequence
                    </Link>
                  </Typography>
                </Grid>
                <br />
                <Grid container spacing={2}>
                  {innovationTrack.courses.map((course) => {
                    return (
                      <Grid
                        className="card-pad"
                        item
                        key={course.quarter}
                        md={4}
                        xs={12}
                      >
                        {/* <Paper className={classes.paper}> */}
                        <div className="card-pad" style={styles.pad}>
                          <Card
                            className="card-pad"
                            style={bgcolorInnovation}
                            className={classes.root}
                            variant="outlined"
                          >
                            <CardContent className={useStyles.centerContent}>
                              <Typography
                                className={classess.centerContent}
                                gutterBottom
                              >
                                Quarter {course.quarter}
                              </Typography>
                              <Typography variant="h5" component="h2">
                                {/* be{bull}nev{bull}o{bull}lent */}
                              </Typography>
                              <Typography
                                className={classes.pos}
                                color="textSecondary"
                              >
                                {/* adjective */}
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                className={classess.centerContent}
                              >
                                <Link
                                  style={titleColor}
                                  to={
                                    "/programs/tracks/courses/" +
                                    course.courseNumber
                                  }
                                >
                                  {course.title}
                                </Link>
                                {/* {'"a benevolent smile"'} */}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              {/* <Button size="small">See more</Button> */}
                            </CardActions>
                          </Card>
                        </div>
                        {/* </Paper> */}
                      </Grid>
                    );
                  })}
                </Grid>
                {/* Heading for development track */}
                <br />
                <br />
                <Grid
                  item
                  alignItems="flex-start"
                  container
                  direction="row"
                  justify="center"
                  spacing={4}
                >
                  <Typography component="h3" gutterBottom variant="h5">
                    <Link to={"/programs/tracks/" + appDevelopmentTrack.slug}>
                      {appDevelopmentTrack.title} Course Sequence
                    </Link>
                  </Typography>
                </Grid>
                <br />
                <Grid container spacing={2}>
                  {appDevelopmentTrack.courses.map((course) => {
                    return (
                      <Grid
                        className="card-pad"
                        item
                        key={course.quarter}
                        md={4}
                        xs={12}
                      >
                        {/* <Paper className={classes.paper}> */}
                        <div className="card-pad" style={styles.pad}>
                          <Card
                            className="card-pad"
                            style={bgcolorApplicationDev}
                            className={classes.root}
                            variant="outlined"
                          >
                            <CardContent className={useStyles.centerContent}>
                              <Typography
                                className={classess.centerContent}
                                gutterBottom
                              >
                                Quarter {course.quarter}
                              </Typography>
                              <Typography variant="h5" component="h2">
                                {/* be{bull}nev{bull}o{bull}lent */}
                              </Typography>
                              <Typography
                                className={classes.pos}
                                color="textSecondary"
                              >
                                {/* adjective */}
                              </Typography>
                              <Typography
                                variant="body2"
                                component="p"
                                className={classess.centerContent}
                              >
                                <Link
                                  style={titleColor}
                                  to={
                                    "/programs/tracks/courses/" +
                                    course.courseNumber
                                  }
                                >
                                  {course.title}
                                </Link>
                                {/* {'"a benevolent smile"'} */}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              {/* <Button size="small">See more</Button> */}
                            </CardActions>
                          </Card>
                        </div>
                        {/* </Paper> */}
                      </Grid>
                    );
                  })}
                </Grid>
                <br />
                <article>
                  {documentToReactComponents(program.longDescription.json)}
                </article>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(ProgramDetails));
