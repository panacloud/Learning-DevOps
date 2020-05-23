import withRoot from "../utils/withRoot"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import withStyles from "@material-ui/styles/withStyles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import SEO from "../components/SEO"
import Page from "../components/Page"
import { makeStyles } from "@material-ui/core/styles"

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
  headings: {
    color: "#706aaf",
    textAlign: "center",
    marginBottom: "10px !important",
  },
  mainCard: {
    boxShadow: "none !important",
  },
}
const useStyles = makeStyles(theme => ({
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
}))
const TrackDetails = props => {
  // All programs list
  const track = props.pageContext.track

  const { classes } = props
  const classess = useStyles()

  function createObjectiveMarkup() {
    return { __html: track.objective.childMarkdownRemark.html }
  }

  const certifications = track.certifications

  useEffect(() => {})
  return (
    <Page>
      {/* <SEO title={track.title} /> */}
      <div>
        <Typography variant="h3" className={props.classes.headings}>
          {track.title}
        </Typography>

        <Card data-aos="fade-up" className={classes.mainCard}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Objective of the Track
            </Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={createObjectiveMarkup()}
            ></Typography>

            {certifications && (
              <div>
                <Typography variant="h6">
                  Also prepares the student for the following Certifications
                </Typography>
                <ol>
                  {certifications.map((cert, key) => (
                    <li key={key}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cert.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={4}
              data-aos="fade-up"
            >
              {track.courses.map(course => (
                <Grid
                  className="card-pad bg-color-technical card-box"
                  item
                  key={course.quarter}
                  md={3}
                  xs={12}
                >
                  <Link
                    className="link-color"
                    to={"/programs/tracks/courses/" + course.courseNumber}
                  >
                    <div className="card-pad pad">
                      <Card className="card-pad bg-color-technical">
                        <CardContent className={useStyles.centerContent}>
                          <Typography
                            className={classess.centerContent}
                            gutterBottom
                          >
                            Quarter {course.quarter}
                          </Typography>
                          <Typography variant="h5" component="h2"></Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          ></Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            className={classess.centerContent}
                          >
                            {course.title}
                          </Typography>
                          <Typography className="arrow-right">
                            <img
                              height="20px"
                              width="20px"
                              src={require("../pages/team/point-to.png")}
                              alt="arrow"
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>

            <Typography variant="body1">
              {documentToReactComponents(track.description.json)}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Page>
  )
}

export default withRoot(withStyles(styles)(TrackDetails))
