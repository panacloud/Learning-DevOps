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
};

const ListOfPrograms = (props) => {
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
      return (
        <Grid item key={"/abc"} md={6} xs={12}>
          <Card>
            
            <CardContent>
              <Typography component="h2" gutterBottom variant="h5">
                <Link to={"/xyz"}>{program.title}</Link>
              </Typography>
              <Typography component="p" dangerouslySetInnerHTML={{__html: program.shortDescription.childMarkdownRemark.html}}></Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    })}
  </Grid>
    
  );
};


export default withStyles(styles)(ListOfPrograms);

