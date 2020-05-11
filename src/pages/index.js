import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = (props) => {
  const programs = props.data.allMarkdownRemark.edges;
  return (
    <Page title={props.data.allContentfulFranchisee.edges[0].node.title}>
      <SEO title="Home">
        <meta
          content="Beautiful Gatsby Material UI Contentful Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        />
      </SEO>

      <HomeFeatures />
      <Card
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/programs"
            variant="contained"
          >
            View All Programs
          </Button>
        }
        avatar={
          <Avatar>
            <Gift />
          </Avatar>
        }
        style={{ minHeight: 523 }}
        title="Our Teaching Programs"
      >
        <Carousel items={programs} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/programs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allContentfulFranchisee {
      edges {
        node {
          title
        }
      }
    }
  }
`;

// Home.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withRoot(withStyles(styles)(Home));
