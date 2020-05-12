import { Router, Location } from "@reach/router";
import React from "react";
import ProgramDetails from "../components/ProgramDetails";
import Page from "../components/Page";
import SEO from "../components/SEO";

const DynamicProgramRoute = (props) => {
  console.log("props", props);
  return (
    <Location>
      {({ location }) => (
        <div>
          {console.log("location", location)}
          <Router location={location}>
            <ProgramDetails path="/app/program/:program" />
          </Router>
        </div>
      )}
    </Location>
    // {(location) }
    // <Page>
    //   <SEO title="P rograms" />
    //   <Location>
    //   </Location>
    // </Page>
  );
};

export default DynamicProgramRoute;
