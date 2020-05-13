import withRoot from "../utils/withRoot";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";
import SEO from "../components/SEO";
import Page from "../components/Page";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const styles = {
  cardMedia: {
    height: "200px",
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
}));

const TrackDetails = (props) => {
  // All programs list
  const program = props.pageContext.program.node.program;
  var splitpath = props.path.split("/");
  // Filter program specific data
  function getProgramData(program) {
    return program.slug === splitpath[2];
  }
  let selectedProgramTrack = program.filter(getProgramData);
  const classes = useStyles();

  useEffect(() => {});
  return (
    <Page title="Track">
      <SEO title="Program of Study" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    {selectedProgramTrack[0].title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {/* be{bull}nev{bull}o{bull}lent */}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {/* well meaning and kindly. */}
                    <br />
                    {/* {'"a benevolent smile"'} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">See more</Button> */}
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    {selectedProgramTrack[0].appDevelopmentTrack.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {/* be{bull}nev{bull}o{bull}lent */}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {/* adjective */}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {/* well meaning and kindly. */}
                    <br />
                    {/* {'"a benevolent smile"'} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">See More</Button> */}
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    {selectedProgramTrack[0].innovationTrack.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {/* be{bull}nev{bull}o{bull}lent */}
                  </Typography>
                  {/* <Typography className={classes.pos}>adjective</Typography> */}
                  <Typography variant="body2" component="p">
                    {/* well meaning and kindly. */}
                    <br />
                    {/* {'"a benevolent smile"'} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">See More</Button> */}
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default withRoot(withStyles(styles)(TrackDetails));
