import React from "react";
import withRoot from "../utils/withRoot";
import withStyles from "@material-ui/styles/withStyles";
import "../css/home.css";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
const styles = () => ({
  root: {
    fontWeight: "bold",
  },
  media: {
    height: 140,
    backgroundSize: "auto !important",
  },
  card: {
    background: "transparent !important",
    boxShadow: "none !important",
  },
  cardContent: {
    textAlign: "center",
    color: "black",
  },
});
const OnlineLearningPanel = (props) => {
  return (
    <div className="sectionInfo">
      <Grid container spacing={2} className="sectionInfo">
        <Grid container justify="center" spacing={2}>
          <Typography variant="h3" gutterBottom>
            Online Learning Experiences
          </Typography>
        </Grid>
        <Grid container justify="center" spacing={8}>
          <Grid item md={4} xs={12}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.media}
                image={require("../assets/certificate.jpeg")}
                title="Contemplative Reptile"
              />
              <CardContent className={props.classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Certifications
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Advance your career and build your confidence with a 3-6 month
                  action-oriented learning experience made up of cohort and
                  self-paced courses.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.media}
                image={require("../assets/course.jpeg")}
                title="Contemplative Reptile"
              />
              <CardContent className={props.classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Courses
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Collaborate with a global community in our 5-week online
                  courses and apply new skills to your day-to-day work to
                  increase your impact.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.media}
                image={require("../assets/track.jpeg")}
                title="Contemplative Reptile"
              />
              <CardContent className={props.classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Track
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  Learn anytime, anywhere. Boost your skills with flexible,
                  short-form online courses designed to fit your life. Access 90
                  days from purchase.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRoot(withStyles(styles)(OnlineLearningPanel));
