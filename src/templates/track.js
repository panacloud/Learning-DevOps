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
const TrackDetails = (props) => {
  // All programs list
  const track = props.pageContext.track;

  const { classes } = props;
  const classess = useStyles();

  function createObjectiveMarkup() {
    return { __html: track.objective.childMarkdownRemark.html };
  }

  const certifications = track.certifications;
  // if (certifications) {
  //   console.log("CCCCCCCCCCC " + track.title + JSON.stringify(certifications));
  // }

  // var certificationsJSX = <> </>;
  // var certMessage = <></>;
  // var once = true;
  // if (certifications) {
  //   certifications.map((cert) => {
  //     if (once) {
  //       certMessage = (
  //         <div>
  //           Prepares the student for the following International Certifications
  //         </div>
  //       );
  //       once = false;
  //     }

  //     certificationsJSX = (
  //       <div>
  //         <div>{certificationsJSX}</div>
  //         <a href={cert.url} target="_blank">
  //           {cert.title}
  //         </a>
  //       </div>
  //     );
  //   });
  // } else {
  //   certificationsJSX = <> </>;
  // }

  useEffect(() => {});
  return (
    <Page title={track.title}>
      <SEO title={track.title} />
      <div>Objective of the Track</div>
      <div dangerouslySetInnerHTML={createObjectiveMarkup()} />
      {/* Note that external links still use `a` tags not Link. */}
      {/* {certMessage}
      {certificationsJSX} */}
      {certifications && (
        <ol>
          <h5 style={{ color: "#296" }}>
            Prepares the student for the following International Certifications:
          </h5>
          {certifications?.map((cert, key) => {
            return (
              <li key={key}>
                <a href={cert.url} target="_blank">
                  {cert.title}
                </a>
              </li>
            );
          })}
        </ol>
      )}

      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="center"
        spacing={4}
      >
        {/* <article> */}
        {track.courses.map((course) => {
          return (
            <Grid
              className="card-pad bg-color-applicationDev"
              item
              key={course.quarter}
              md={3}
              xs={12}
            >
              {/* <Paper className={classes.paper}> */}
              <div className="card-pad pad" style={styles.pad}>
                <Card
                  className="card-pad"
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent className={useStyles.centerContent}>
                    <Typography className={classess.centerContent} gutterBottom>
                      Quarter {course.quarter}
                      
                    </Typography>
                    <Typography variant="h5" component="h2" className={classess.centerContent} >
                    { course.courseNumber }
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classess.centerContent}
                    >
                      <Link
                        className="link-title"
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
        <article>
            {documentToReactComponents(track.description.json)}
            </article>
      </Grid>
    </Page>
  );
};

export default withRoot(withStyles(styles)(TrackDetails));
