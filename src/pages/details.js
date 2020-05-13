import { Router, Location } from "@reach/router";
import React from "react";
import ProgramDetails from "../components/ProgramDetails";
import Page from "../components/Page";
import SEO from "../components/SEO";

const DynamicProgramRoute = (props) => {
  return (
    <Page>
      <SEO title="P rograms" />
      <Router>
        <ProgramDetails path="/details/program/:program" />
      </Router>
    </Page>
  );
};

export default DynamicProgramRoute;
