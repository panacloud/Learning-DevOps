import withRoot from "../utils/withRoot"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Typography, Card, CardContent, Grid } from "@material-ui/core"
import withStyles from "@material-ui/styles/withStyles"
import SEO from "../components/SEO"
import Page from "../components/Page"
import { makeStyles } from "@material-ui/core/styles"
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
  cardStyle: {
    height: "400px",
  },
  card: {
    boxShadow: "none !important",
    marginTop: "10px",
  },
  headings: {
    color: "#706aaf",
    textAlign: "center",
    marginBottom: "10px !important",
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
  courseOutline: {
    marginTop: "20px",
  },
}))
const CourseDetails = props => {
  // All programs list
  const course = props.pageContext.course
  const certification = course.certification
  const textBooks = course.textBooks
  const referenceBooks = course.referenceBooks
  const sections = course.sections
  const belongsToTrack = props.pageContext.track
  const prereqCourses = props.pageContext.prereq

  console.log("Sections " + JSON.stringify(sections))

  const { classes } = props
  const classess = useStyles()

  useEffect(() => {})
  return (
    <Page title="Course Syllabus">
      {/* <SEO title="Course Syllabus" /> */}
      <div>
        <Typography variant="h3" className={props.classes.headings}>
          {course.courseNumber} {course.title}
        </Typography>
        <Typography variant="h4">Description</Typography>
        <div
        // dangerouslySetInnerHTML={{
        //   __html: course.description.childMarkdownRemark.html,
        // }}
        ></div>

        <Card gutterBottom className={props.classes.card} data-aos="fade-up">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              This Course is taught in the following Track <br />
            </Typography>
            <ul>
              <li>
                <Link to={"/programs/tracks/" + belongsToTrack.slug}>
                  {belongsToTrack.title} Course Sequence
                </Link>
              </li>
            </ul>

            <Typography gutterBottom variant="h6">
              Course Prerequisites
            </Typography>
            <ul>
              {prereqCourses.length > 0 ? (
                prereqCourses.map((prereq, key) => {
                  return (
                    <div key={key}>
                      <Link
                        to={"/programs/tracks/courses/" + prereq.courseNumber}
                      >
                        {prereq.courseNumber} {prereq.title}
                      </Link>
                    </div>
                  )
                })
              ) : (
                <li>None</li>
              )}
            </ul>

            {certification && (
              <div>
                <Typography gutterBottom variant="h6">
                  Also prepares the student for the following Certifications
                </Typography>
                <ol>
                  {certification.map((cert, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {cert.title}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}

            {textBooks && (
              <div>
                <Typography gutterBottom variant="h6">
                  Text Book(s)
                </Typography>
                <ol>
                  {textBooks.map((book, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {book.title} by {book.authors}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}

            {referenceBooks && (
              <div>
                <Typography gutterBottom variant="h6">
                  Reference Book(s)
                </Typography>
                <ol>
                  {referenceBooks.map((book, key) => {
                    return (
                      <li key={key}>
                        <a
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {book.title} by {book.authors}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}
          </CardContent>
        </Card>

        <Grid container spacing={2}>
          <Grid item xs={12} className={classess.courseOutline}>
            <Typography gutterBottom variant="h4">
              Course Outline
            </Typography>
          </Grid>

          {sections
            ? sections.map((item, key) => (
                <Grid item md={12} xs={12}>
                  <Card className={props.classes.card} data-aos="fade-up">
                    <CardContent>
                      <Typography variant="h6">
                        {item.serialNumber}. {item.title} (Week {item.weeks})
                      </Typography>
                      {item.lineItem
                        ? item.lineItem.map((line, key) => {
                            return (
                              <div key={key}>
                                <Typography variant="subtitle1" gutterBottom>
                                  <b>{line.title}</b>
                                </Typography>
                                <div
                                // dangerouslySetInnerHTML={{
                                //   __html:
                                //     line.shortDescription.childMarkdownRemark.html,
                                // }}
                                ></div>
                              </div>
                            )
                          })
                        : null}
                      {item.quiz && (
                        <div>
                          {item.quiz.title} in Week {item.quiz.week}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    </Page>
  )
}

export default withRoot(withStyles(styles)(CourseDetails))
