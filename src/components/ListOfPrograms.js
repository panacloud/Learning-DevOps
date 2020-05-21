import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import programs from "../hooks/useProgramsData";
import "aos/dist/aos.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init();
}

const styles = {
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cover: {
    height: "400px",
  },
  root: {
    display: "flex",
    boxShadow: "none !important",
  },
  findMore: {
    display: "flex",
    alignItems: "center",
    color: "#706aaf",
    fontWeight: "700",
    marginTop: "10px",
  },
  findMoreImg: {
    marginLeft: "25px",
    width: "53px",
    background: "#f4f5f6",
    padding: "10px",
    borderRadius: "34px",
  },
  contentTitle: {
    color: "#706aaf",
  },
  rootWithMargin: {
    display: "flex",
    boxShadow: "none !important",
    marginTop: "70px",
  },
};

const ListOfPrograms = (props) => {
  const { classes } = props;
  const programsAvailable = programs();
  return programsAvailable.map((program, index) => (
    <Card
      className={index === 0 ? classes.root : classes.rootWithMargin}
      data-aos="fade-up"
      key={"/programs/" + program.slug}
    >
      <Grid container justify="center">
        {index === 1 || index === 3 ? (
          <React.Fragment>
            <Grid item md={4} xs={12}>
              <CardContent className={classes.content}>
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.contentTitle}
                >
                  Certified {program.title} Professional
                </Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>
                <Link
                  to={"/programs/" + program.slug}
                  state={{ program: program }}
                >
                  <div className={classes.findMore}>
                    Find more
                    <img
                      className={classes.findMoreImg}
                      src={require("../assets/arrow.png")}
                      alt="arrow"
                    />
                  </div>
                </Link>
              </CardContent>
            </Grid>
            <Grid item md={8} xs={12}>
              <CardMedia
                className={classes.cover}
                image={program.image.file.url}
              />
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid item md={8} xs={12}>
              <CardMedia
                className={classes.cover}
                image={program.image.file.url}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <CardContent className={classes.content}>
                <Typography
                  gutterBottom
                  variant="h4"
                  className={classes.contentTitle}
                >
                  Certified {program.title} Professional
                </Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>
                <Link
                  to={"/programs/" + program.slug}
                  state={{ program: program }}
                >
                  <div className={classes.findMore}>
                    Find more
                    <img
                      className={classes.findMoreImg}
                      src={require("../assets/arrow.png")}
                      alt="arrow"
                    />
                  </div>
                </Link>
              </CardContent>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </Card>
  ));
};

export default withStyles(styles)(ListOfPrograms);
