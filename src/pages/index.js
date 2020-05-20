import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Carousel from "../components/Carousel";
import withStyles from "@material-ui/styles/withStyles";
import { Typography } from "@material-ui/core";
import Page from "../components/Page";
import Header from "../components/Header";
import SectionInfo from "../components/SectionInfo";
import "aos/dist/aos.css";
import "../css/home.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init();
}

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
      <Typography
        variant="h4"
        className="title"
        data-aos="fade-down"
        data-aos-delay="1000"
      >
        {props.data.allContentfulFranchisee.edges[0].node.title}
        <div className="subTitle">
          <p>Find out more</p>
          <img src={require("../assets/chevron.jpeg")} />
        </div>
      </Typography>

      <Page>
        <SEO title="Home">
          <meta
            content="Beautiful Gatsby Material UI Contentful Business Starter. Tiny code. Well organized. Ready to customize and go."
            name="description"
          />
        </SEO>

        <Carousel />

        <SectionInfo />

        {/*<HomeFeatures />*/}

        {/*<Card
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
          
        </Card>*/}
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
