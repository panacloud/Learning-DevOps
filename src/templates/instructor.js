import withRoot from "../utils/withRoot";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import SEO from "../components/SEO";
import Page from "../components/Page";
import { makeStyles } from "@material-ui/core/styles";
import "aos/dist/aos.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

if (AOS) {
  AOS.init();
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
  courseOutline: {
    marginTop: "20px",
  },
}));
const InstructorDetails = (props) => {
  // All programs list
  const instructor = props.pageContext.instructor;

  console.log("Instructor " + JSON.stringify(instructor));

  const { classes } = props;
  const classess = useStyles();

  useEffect(() => {});
  //I am unable to show video from
  return (
    <Page title="Instructor ">
      <SEO title="Instructor" />
      <div>
        <Typography variant="h3" className={props.classes.headings}>
          <a href={instructor.url}>{instructor.name}</a>
        </Typography>

        <img
          src={instructor.picture.file.url}
          alt="Profile Picture"
          width="100"
          height="125"
        ></img>
        <Typography variant="h6">
          {documentToReactComponents(instructor.description.json)}
        </Typography>
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(InstructorDetails));
