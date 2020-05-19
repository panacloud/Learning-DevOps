import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Carousel from "../components/Carousel";
import withStyles from "@material-ui/styles/withStyles";
import OnlineLearningPanel from "../components/OnlineLearningPanel";
import { Typography } from "@material-ui/core";
import Page from "../components/Page";
import "../css/home.css";
import Header from "../components/Header";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
  media: {
    height: 140,
    backgroundSize: "auto !important",
  },
  card: {
    background: "transparent !important",
    boxShadow: "none !important",
  },
  cardContent: {
    textAlign: "center",
    color: "black",
  },
});
const Home = (props) => {
  //const programs = props.data.allMarkdownRemark.edges;
  return (
    <div>
      <Header />
      <img
        src={require("../assets/global.jpeg")}
        className="background"
        alt="title"
      />
      <Typography variant="h4" className="title">
        {props.data.allContentfulFranchisee.edges[0].node.title}
      </Typography>

      <Page>
        <SEO title="Home">
          <meta
            content="Beautiful Gatsby Material UI Contentful Business Starter. Tiny code. Well organized. Ready to customize and go."
            name="description"
          />
        </SEO>

        <Carousel />

        {/* Program track */}
        <OnlineLearningPanel />
      </Page>
    </div>
  );
};

export const query = graphql`
  query {
    allContentfulFranchisee {
      edges {
        node {
          title
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
