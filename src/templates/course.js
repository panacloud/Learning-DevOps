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
const CourseDetails = (props) => {
  // All programs list
  const course = props.pageContext.course;
  const certification = course.certification;
  const textBooks = course.textBooks;
  const referenceBooks = course.referenceBooks;
  const sections = course.sections;
  const belongsToTrack = props.pageContext.track;
  const prereqCourses = props.pageContext.prereq;

  console.log("Sections " + JSON.stringify(sections));

  const { classes } = props;
  const classess = useStyles();

  useEffect(() => {});
  return (
    <Page title="Course Syllabus">
      <SEO title="Course Syllabus" />
      <div>
        <h1 className="program-title">
          {course.courseNumber} {course.title}
        </h1>
        <div>Description:</div>
        <div
          dangerouslySetInnerHTML={{
            __html: course.description.childMarkdownRemark.html,
          }}
        ></div>
        <div>This Course is taught in the following Track: </div>
        <div>
          <Link to={"/programs/tracks/" + belongsToTrack.slug}>
            {belongsToTrack.title} Course Sequence
          </Link>
        </div>
        <br />
        {prereqCourses.length > 0 ? (
          <div>Course Prerequisites: </div>
        ) : (
          <div>Course Prerequisites: None</div>
        )}

        {prereqCourses.map((prereq) => {
          return (
            <div>
              <Link to={"/programs/tracks/courses/" + prereq.courseNumber}>
                {prereq.courseNumber} {prereq.title}
              </Link>
            </div>
          );
        })}

        {certification && (
          <ol>
            <h5 style={{ color: "#296" }}>
              Prepares the student for the following International
              Certification(s):
            </h5>
            {certification?.map((cert, key) => {
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

        {textBooks && (
          <ol>
            <h5 style={{ color: "#296" }}>Text Book(s):</h5>
            {textBooks?.map((book, key) => {
              return (
                <li key={key}>
                  <a href={book.url} target="_blank">
                    {book.title} by {book.authors}
                  </a>
                </li>
              );
            })}
          </ol>
        )}

        {referenceBooks && (
          <ol>
            <h5 style={{ color: "#296" }}>Reference Book(s):</h5>
            {referenceBooks?.map((book, key) => {
              return (
                <li key={key}>
                  <a href={book.url} target="_blank">
                    {book.title} by {book.authors}
                  </a>
                </li>
              );
            })}
          </ol>
        )}

        <div>Course Outline:</div>

        {sections.map((item) => {
          return (
            <div>
              <div>
                {item.serialNumber}. {item.title} (Week {item.weeks})
              </div>
              {item.lineItem.map((line) => {
                return (
                  <div>
                    <div>{line.title}</div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: line.shortDescription.childMarkdownRemark.html,
                      }}
                    ></div>
                  </div>
                );
              })}
              {item.quiz && (
                <div>
                  {item.quiz?.title} in Week {item.quiz?.week}
                </div>
              )}

              <br />
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(CourseDetails));
