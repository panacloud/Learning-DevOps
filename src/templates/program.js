
/*
export default function Name(props) {
    const context = props.pageContext;
    console.log("PAGE CONTEXT: " + JSON.stringify(context, null, 4))
  return (
      <div>Hello {context.firstName} {context.lastName}</div>
  )
}
*/


import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const program = props.pageContext.program;


  const { classes } = props;
  useEffect(() => {});
  return (
    <div>
      <h1 className="program-title">{program.title}</h1>
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="center"
        spacing={8}
      >
        <Grid item key={"/program/" + program.slug} md={10} xs={12}>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              image={program.image.file.url}
            />
            <CardContent>
              <Typography component="h2" gutterBottom variant="h5">
                <Link to={"/"}>
                  Certified {program.title} Professional
                </Link>
              </Typography>
              <Typography
                component="p"
                dangerouslySetInnerHTML={{
                  __html:
                    program.shortDescription.childMarkdownRemark
                      .html,
                }}
              ></Typography>
              <article>
                {documentToReactComponents(
                  program.longDescription.json
                )}
              </article>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ProgramDetails);
