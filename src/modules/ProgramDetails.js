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
  const { classes } = props;
  const [person, setPerson] = useState();
  useEffect(() => {});
  return (
    <div>
      <h1 className="program-title">{props.location.state.program.title}</h1>
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="center"
        spacing={8}
      >
        <Grid
          item
          key={"/programs/" + props.location.state.program.slug}
          md={10}
          xs={12}
        >
          <Card>
            <CardMedia
              className={classes.cardMedia}
              image={props.location.state.program.image.file.url}
            />
            <CardContent>
              <Typography component="h2" gutterBottom variant="h5">
                <Link to={"/"}>
                  Certified {props.location.state.program.title} Professional
                </Link>
              </Typography>
              <Typography
                component="p"
                dangerouslySetInnerHTML={{
                  __html:
                    props.location.state.program.shortDescription
                      .childMarkdownRemark.html,
                }}
              ></Typography>
              <article>
                {documentToReactComponents(
                  props.location.state.program.longDescription.json
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
