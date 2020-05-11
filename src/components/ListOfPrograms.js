import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";
import { StaticQuery, graphql } from "gatsby";

const styles = {
  cardMedia: {
    height: "200px",
  },
};
const ListOfPrograms = (props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        // console.log(data);
        return <div></div>;
      }}
    />
  );
};

export const detailsQuery = graphql`
  {
    contentfulQuiz {
      title
    }
  }
`;

export default withStyles(styles)(ListOfPrograms);

//{props.data.allContentfulFranchisee.edges[0].node.courseCatalog.programsAvailable}
