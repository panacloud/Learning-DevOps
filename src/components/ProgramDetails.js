import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import programs from "../hooks/useProgramsData";
const styles = {
  cardMedia: {
    height: "200px",
  },
  cardStyle: {
    height: "400px",
  },
};
const ProgramDetails = (props) => {
  // All programs list
  const availablePrograms = programs();
  let selectedProgram = [];
  console.log(props, availablePrograms);
  // Filter program specific data
  function getProgramData(program) {
    return program.slug === props.program;
  }
  selectedProgram = availablePrograms.filter(getProgramData);
  console.log(selectedProgram);

  const { classes } = props;
  const [person, setPerson] = useState(selectedProgram);
  useEffect(() => {
    setTimeout(() => {
      setPerson(selectedProgram);
    }, 6000);
  }, [selectedProgram]);
  return (
    <div>
      {person ? (
        <div>
          <p>4IR</p>
          <h1 className="program-title">{person[0].title}</h1>
          <Grid
            alignItems="flex-start"
            container
            direction="row"
            justify="center"
            spacing={8}
          >
            <Grid item key={"/programs/" + person[0].slug} md={10} xs={12}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={person[0].image.file.url}
                />
                <CardContent>
                  <Typography component="h2" gutterBottom variant="h5">
                    <Link to={"/"}>
                      Certified {person[0].title} Professional
                    </Link>
                  </Typography>
                  <Typography
                    component="p"
                    dangerouslySetInnerHTML={{
                      __html:
                        person[0].shortDescription.childMarkdownRemark.html,
                    }}
                  ></Typography>
                  <article>
                    {documentToReactComponents(person[0].longDescription.json)}
                  </article>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <h1>bye</h1>
      )}
    </div>
  );
};

export default withStyles(styles)(ProgramDetails);
