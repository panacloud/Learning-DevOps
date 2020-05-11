import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
//import List from "../../components/List";
import ListOfPrograms from "../../components/ListOfPrograms";

const Programs = (props) => {
  const programs = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Programs of Study">
      <SEO title="Programs" />
      {/*<List items={programs} />*/}
      <ListOfPrograms items={programs} />
    </Page>
  );
};

export const query = graphql`
  query ProgramsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/programs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            image {
              publicURL
            }
            title
            path
          }
        }
      }
    }
  }
`;

export default withRoot(Programs);
