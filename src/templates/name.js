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

export default function Name(props) {
  // const { classes } = props;
  const context = props.pageContext;
  const availablePrograms = programs();
  console.log(availablePrograms);
  let selectedProgram = [];
  // Filter program specific data
  function getProgramData(program) {
    console.log(program, props);
    return program.slug === "ai";
  }
  selectedProgram = availablePrograms.filter(getProgramData);
  const { classes } = props;
  const [person, setPerson] = useState();
  useEffect(() => {});
  console.log(selectedProgram);
  console.log("PAGE CONTEXT: " + JSON.stringify(context, null, 4));
  return (
    // <div>
    //   Hello {context.firstName} {context.lastName}
    // </div>

    <div>
      <h1 className="program-title">{selectedProgram[0].title}</h1>
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="center"
        spacing={8}
      >
        <Grid item key={"/programs/" + selectedProgram[0].slug} md={10} xs={12}>
          <Card>
            <CardMedia
              className="ProgramDetails-cardMedia-753"
              image={selectedProgram[0].image.file.url}
            />
            <CardContent>
              <Typography component="h2" gutterBottom variant="h5">
                <Link to={"/"}>
                  Certified {selectedProgram[0].title} Professional
                </Link>
              </Typography>
              <Typography
                component="p"
                dangerouslySetInnerHTML={{
                  __html:
                    selectedProgram[0].shortDescription.childMarkdownRemark
                      .html,
                }}
              ></Typography>
              <article>
                {documentToReactComponents(
                  selectedProgram[0].longDescription.json
                )}
              </article>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
