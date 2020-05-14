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

const styles = {
  cardMedia: {
    height: "200px",
  },
  pad: {
    padding: "0px !important",
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
var cardStyle = {
  // display: 'block',
  // width: '30vw',
  transitionDuration: "1s",
  height: "10vw",
  backgroundColor: "rgba(25,42,86,.5)",
  color: "white",
};
const bgcolorTechnical = {
  transitionDuration: "1s",
  height: "10vw",
  backgroundColor: "rgba(25,42,86,.5)",
  color: "gold",
};
const bgcolorInnovation = {
  transitionDuration: "1s",
  height: "10vw",
  backgroundColor: "rgba(25,42,86,.75)",
  color: "gold",
};
const bgcolorApplicationDev = {
  transitionDuration: "1s",
  height: "10vw",
  backgroundColor: "#192a56",
  color: "gold",
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

                <Typography component="h3" gutterBottom variant="h6">
                  In order to receive the certification the student has to
                  complete three tracks (sequence of courses):
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* <article> */}
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
                    style={styles.pad}
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
                      <Typography className={classes.pos} color="textSecondary">
                        {/* adjective */}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classess.centerContent}
                      >
                        <Link
                          to={"/programs/tracks/courses/" + course.courseNumber}
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
          {/* </article> */}

          {/* Heading for Technical Track */}
          <Grid
            item
            alignItems="flex-start"
            container
            direction="row"
            justify="center"
            spacing={4}
          >
            <Typography component="h3" gutterBottom variant="h5">
              {technicalTrack.title} Course Sequence
            </Typography>
          </Grid>
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
                      <Typography className={classes.pos} color="textSecondary">
                        {/* adjective */}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classess.centerContent}
                      >
                        <Link style={titleColor} to={`/track/{"abc"}`}>
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

          {/* Heading for innovation track */}
          <Grid
            item
            alignItems="flex-start"
            container
            direction="row"
            justify="center"
            spacing={4}
          >
            <Typography component="h3" gutterBottom variant="h5">
              {innovationTrack.title} Course Sequence
            </Typography>
          </Grid>
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
                      <Typography className={classes.pos} color="textSecondary">
                        {/* adjective */}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classess.centerContent}
                      >
                        <Link style={titleColor} to={`/track/{"abc"}`}>
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

          {/* Heading for development track */}
          <Grid
            item
            alignItems="flex-start"
            container
            direction="row"
            justify="center"
            spacing={4}
          >
            <Typography component="h3" gutterBottom variant="h5">
              {appDevelopmentTrack.title} Course Sequence
            </Typography>
          </Grid>
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
                      <Typography className={classes.pos} color="textSecondary">
                        {/* adjective */}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classess.centerContent}
                      >
                        <Link style={titleColor} to={`/track/{"abc"}`}>
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
          <article>
            {documentToReactComponents(program.longDescription.json)}
          </article>
        </Grid>
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(ProgramDetails));
