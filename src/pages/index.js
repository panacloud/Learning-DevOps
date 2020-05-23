import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Carousel from "../components/Carousel";
import RecentProjects from "../components/RecentProjects";
import AboutSection from "../components/AboutSection";
import withStyles from "@material-ui/styles/withStyles";
import SectionInfo from "../components/SectionInfo";
import MainSection from "../components/MainSection";
import { Grid } from "@material-ui/core";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
const AOS = typeof window !== `undefined` ? require("aos") : null;
import "./index.css";


if (AOS) {
  AOS.init();
}

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
  container: {
    marginTop: 94,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
    marginTop: "94px !important",
  },
});

const Home = (props) => {
  return (
    <React.Fragment>
      <MainSection
        title={props.data.allContentfulFranchisee.edges[0].node.title}
      />

      <Grid container direction="row" justify="center">
        <Grid className={props.classes.contentBox} item>
          <Carousel />
        </Grid>
        <Grid className={props.classes.contentBox} item>
          <SectionInfo />
        </Grid>
      </Grid>
      <RecentProjects />
      <AboutSection />
      <Footer />
    </React.Fragment>
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
