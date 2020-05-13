import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";
import programs from "../hooks/useProgramsData";

const styles = {
  cardMedia: {
    height: "200px",
  },
  cardStyle: {
    height: "400px",
  },
};

const ListOfPrograms = (props) => {
  const { classes } = props;
  //console.log("AAAAAAAAAAAA");
  const programsAvailable = programs();
  //console.log(programsAvailable);
  return (
    <Grid
      alignItems="flex-start"
      container
      direction="row"
      justify="center"
      spacing={8}
    >
      {programsAvailable.map((program) => {
        //console.log('zzzzzzzzzzzzzzzzzz ' + program.image.file.url);
        return (
          <Grid item key={"/programs/" + program.slug} md={6} xs={12}>
            <Card style={styles.cardStyle}>
              <CardMedia
                className={classes.cardMedia}
                image={program.image.file.url}
              />
              <CardContent>
                <Typography component="h2" gutterBottom variant="h5">
                  <Link to={"/programs/" + program.slug} state={{ program: program }}>
                    Certified {program.title} Professional
                  </Link>
                </Typography>
                <Typography
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: program.shortDescription.childMarkdownRemark.html,
                  }}
                ></Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(ListOfPrograms);
