import withRoot from "../utils/withRoot"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import withStyles from "@material-ui/styles/withStyles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import Page from "../components/Page"
import { makeStyles } from "@material-ui/core/styles"
import CardActions from "@material-ui/core/CardActions"
import "../css/program.css"
import "aos/dist/aos.css"
const AOS = typeof window !== `undefined` ? require("aos") : null

if (AOS) {
  AOS.init()
}

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

const ProgramDetails = props => {
  // All programs list
  const program = props.pageContext.program
  const technicalTrack = program.technicalTrack
  const innovationTrack = program.innovationTrack
  const appDevelopmentTrack = program.appDevelopmentTrack
  const { classes } = props
  const classess = useStyles()

  const scroll = () => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, window.innerHeight)
    }
  }

  useEffect(() => {})
  return (
    <div>
      <Page>
        {/* <SEO title="Program of Study" /> */}
        <Card className="mainCard">
          <Grid container justify="center">
            <Grid item md={6} xs={12}>
              <CardContent>
                <Typography variant="h3" className="mainHeading">
                  Certified {program.title} Professional
                </Typography>
                <Typography
                  variant="body1"
                  className="subHeading"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>

                <div className="findMore" onClick={scroll}>
                  Learn more
                  <img
                    className="findMoreImg"
                    src={require("../assets/arrow.png")}
                    alt="arrow"
                  />
                </div>
              </CardContent>
            </Grid>
            <Grid item md={6} xs={12}>
              <CardMedia className="cover" image={program.image.file.url} />
            </Grid>
          </Grid>
        </Card>

        <Card className="descriptionCard" data-aos="fade-up">
          <CardContent>
            <Typography variant="body1">
              {documentToReactComponents(program.longDescription.json)}
            </Typography>
          </CardContent>
        </Card>

        <Grid
          className="trackSection"
          container
          justify="center"
          alignItems="center"
          spacing={4}
          data-aos="fade-up"
        >
          <Grid item md={12} xs={12}>
            <Typography variant="h4" className="trackTitle">
              In order to receive the certification the student has to complete
              three tracks (sequence of courses)
            </Typography>
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="trackTitle">
              <Link to={"/programs/tracks/" + technicalTrack.slug}>
                {technicalTrack.title} Course Sequence
              </Link>
            </Typography>
          </Grid>
          {technicalTrack.courses.map(course => {
            return (
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
                      <CardActions></CardActions>
                    </Card>
                  </div>
                </Link>
              </Grid>
            )
          })}
        </Grid>

        <Grid
          className="trackSection"
          container
          justify="center"
          alignItems="center"
          spacing={4}
          data-aos="fade-up"
        >
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="trackTitle">
              <Link to={"/programs/tracks/" + innovationTrack.slug}>
                {innovationTrack.title} Course Sequence
              </Link>
            </Typography>
          </Grid>
          {innovationTrack.courses.map(course => {
            return (
              <Grid
                className="card-pad bg-color-innovation card-box"
                item
                key={course.quarter}
                md={4}
                xs={12}
              >
                <Link
                  className="link-color"
                  to={"/programs/tracks/courses/" + course.courseNumber}
                >
                  <div className="card-pad pad">
                    <Card className="card-pad " variant="outlined">
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
                      <CardActions></CardActions>
                    </Card>
                  </div>
                </Link>
              </Grid>
            )
          })}
        </Grid>

        <Grid
          className="trackSection"
          container
          justify="center"
          alignItems="center"
          spacing={4}
          data-aos="fade-up"
        >
          <Grid item md={12} xs={12}>
            <Typography variant="h3" className="trackTitle">
              <Link to={"/programs/tracks/" + appDevelopmentTrack.slug}>
                {appDevelopmentTrack.title} Course Sequence
              </Link>
            </Typography>
          </Grid>
          {appDevelopmentTrack.courses.map(course => {
            return (
              <Grid
                className="card-pad bg-color-applicationDev card-box"
                item
                key={course.quarter}
                md={4}
                xs={12}
              >
                <Link
                  className="link-title"
                  to={"/programs/tracks/courses/" + course.courseNumber}
                >
                  <div className="card-pad pad" style={styles.pad}>
                    <Card className="card-pad" variant="outlined">
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
                      <CardActions></CardActions>
                    </Card>
                  </div>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Page>
    </div>
  )
}

export default withRoot(withStyles(styles)(ProgramDetails))
