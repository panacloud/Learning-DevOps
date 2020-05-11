import { Router } from "@reach/router";
import React from "react";
import ProgramDetails from "../modules/ProgramDetails";
import Page from "../components/Page";

const DynamicProgramRoute = () => {
  return (
    <Page>
      <Router>
        <ProgramDetails path="/app/program/:program" />
      </Router>
    </Page>
  );
};

export default DynamicProgramRoute;
