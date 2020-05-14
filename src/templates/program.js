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
const ProgramDetails = (props) => {
  const quarters = [
    {
      quarter: "Quarter 1",
      program: "Artificial Intelligence",
      pic:
        "//images.ctfassets.net/6y7x6a0he6ux/fnmiegLZP7y4t5vqUvrsl/442eff253bee05f2e68597cedc1ee88d/ai.jpg",
    },
    {
      quarter: "Quarter 2",
      program: "Application Development Track",
      pic:
        "//images.ctfassets.net/6y7x6a0he6ux/fnmiegLZP7y4t5vqUvrsl/442eff253bee05f2e68597cedc1ee88d/ai.jpg",
    },
    {
      quarter: "Quarter 3",
      program: "Innovation Track",
      pic:
        "//images.ctfassets.net/6y7x6a0he6ux/fnmiegLZP7y4t5vqUvrsl/442eff253bee05f2e68597cedc1ee88d/ai.jpg",
    },
    // { quarter: "Quarter 4", program: "Block Chain" },
  ];
  // All programs list
  const program = props.pageContext.program;
  const technicalTrack = program.technicalTrack;
  const innovationTrack = program.innovationTrack;
  console.log("IIIIIIIIIIIII " + innovationTrack.title);
  const appDevelopmentTrack = program.appDevelopmentTrack;
  const { classes } = props;
  const classess = useStyles();

  useEffect(() => {});
  return (
    <Page title="Program of Study">
      <SEO title="Program of Study" />
      <div>
        <h1 className="program-title">{program.title}</h1>
        <Grid
          alignItems="flex-start"
          container
          direction="row"
          justify="center"
          spacing={8}
        >
          <Grid item key={"/program/" + program.slug} md={12} xs={12}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={program.image.file.url}
              />
              <CardContent>
                <Typography component="h2" gutterBottom variant="h5">
                  <Link to={"/"}>Certified {program.title} Professional</Link>
                </Typography>
                <Typography
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>





                <Typography component="h3" gutterBottom variant="h5">
                  <Link to= {"/programs/tracks/" + technicalTrack.slug} >
                      {technicalTrack.title} Course Sequence
                  </Link>
                
                </Typography>
                <article>
                {technicalTrack.courses.map((course) => {
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
                        <Link to={`/track/{"abc"}`}>
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
                </article>



                <Typography component="h3" gutterBottom variant="h5">
                   {innovationTrack.title} Course Sequence
                </Typography>
                <article>
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
                        <Link to={`/track/{"abc"}`}>
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


                </article>

                <Typography component="h3" gutterBottom variant="h5">
                   {appDevelopmentTrack.title} Course Sequence
                </Typography>
                <article>
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
                        <Link to={`/track/{"abc"}`}>
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
                </article>






                <article>
                  {documentToReactComponents(program.longDescription.json)}
                </article>
              </CardContent>
            </Card>
          </Grid>
          {quarters.map((quater) => {
            console.log(quater);
            return (
              // <div>
              <Grid
                className="card-pad"
                item
                key={quater.quarter}
                md={4}
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
                    <CardMedia
                      className={classes.cardMedia}
                      image={program.image.file.url}
                    />
                    <CardContent className={useStyles.centerContent}>
                      <Typography
                        className={classess.centerContent}
                        gutterBottom
                      >
                        {quater.quarter}
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
                        <Link to={`/track/${program.slug}`}>
                          {quater.program}
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
              // </div>
            );
          })}
        </Grid>
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(ProgramDetails));
