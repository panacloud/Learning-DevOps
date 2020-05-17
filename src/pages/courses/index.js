import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
//import List from "../../components/List";
import ListOfPrograms from "../../components/ListOfPrograms";

const Programs = (props) => {
  //const programs = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Course Catalog">
      <SEO title="Course Catalog" />
      {/*<List items={programs} />*/}
      
    </Page>
  );
};



export default withRoot(Programs);