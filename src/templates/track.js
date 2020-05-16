import withRoot from "../utils/withRoot";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";
import Page from "../components/Page";
import { makeStyles } from "@material-ui/core/styles";

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

  useEffect(() => {});
  return (
    <Page title={track.title}>
      <SEO title={track.title} />
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="center"
        spacing={4}
      >
        <Grid item md={12} xs={12}>
          <Card>
            <CardContent>
              <Typography component="h3" gutterBottom variant="h6">
                Objective of the Track:
              </Typography>
              <div dangerouslySetInnerHTML={createObjectiveMarkup()} />
              {certifications && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ol>
                    <Typography
                      style={{ textAlign: "center", color: "indigo" }}
                      variant="h6"
                    >
                      Prepares the student for the following International
                      Certifications
                    </Typography>
                    {certifications?.map((cert, key) => {
                      return (
                        <li key={key} style={{ margin: "5px 0px 5px 25%" }}>
                          <a href={cert.url} target="_blank">
                            {cert.title}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}
              <Grid container spacing={2}>
                {track.courses.map((course) => {
                  console.log(course);
                  return (
                    <Grid
                      className="card-pad bg-color-applicationDev  card-box"
                      item
                      key={course.quarter}
                      md={3}
                      xs={12}
                    >
                      <div className="card-pad">
                        <Card
                          className="card-pad"
                          // style={styles.pad}
                          className={classes.root}
                          variant="outlined"
                        >
                          <CardContent className={useStyles.centerContent}>
                            <Typography
                              variant="h6"
                              component="h6"
                              className={classess.centerContent}
                              gutterBottom
                            >
                              Quarter {course.quarter}
                            </Typography>
                            <Typography
                              variant="h6"
                              component="h6"
                              className={classess.centerContent}
                            >
                              {course.courseNumber}
                            </Typography>
                            <Typography
                              className={classes.pos}
                              color="textSecondary"
                            ></Typography>
                            <Typography
                              variant="body2"
                              component="p"
                              className={classess.centerContent}
                            >
                              <Link
                                className="link-title"
                                to={
                                  "/programs/tracks/courses/" +
                                  course.courseNumber
                                }
                              >
                                {course.title}
                              </Link>
                              {/* {'"a benevolent smile"'} */}
                            </Typography>
                            <Typography className="arrow-right">
                              <img
                                height="20px"
                                width="20px"
                                src={require("../pages/team/point-to.png")}
                              />
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                      {/* </Paper> */}
                    </Grid>
                  );
                })}
                <article>
                  {documentToReactComponents(track.description.json)}
                </article>
                ;
              </Grid>
            </CardContent>
            <br />
            <br />
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default withRoot(withStyles(styles)(TrackDetails));
