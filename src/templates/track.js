import withRoot from "../utils/withRoot";
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";
import Page from "../components/Page";

const styles = {
    cardMedia: {
        height: "200px",
    },
    cardStyle: {
        height: "400px",
    },
};
const TrackDetails = (props) => {
    // All programs list
    const program = props.pageContext.program.node.program;
    var splitpath = props.path.split('/')
    // Filter program specific data
    function getProgramData(program) {
        return program.slug === splitpath[2]
    }
    let selectedProgramTrack = program.filter(getProgramData);
    useEffect(() => { });
    return (

        <Page title="Track">
            <SEO title="Program of Study" />
            <div>
                <Grid
                    alignItems="flex-start"
                    container
                    direction="row"
                    justify="center"
                    spacing={8}
                >
                    <Grid item key={"/program/" + program.slug} md={10} xs={12}>
                        <Card>
                            <h1 className="program-title">{selectedProgramTrack[0].title}</h1>
                            <h1 className="program-title">{selectedProgramTrack[0].appDevelopmentTrack.title}</h1>
                            <h1 className="program-title">{selectedProgramTrack[0].innovationTrack.title}</h1>
                            <CardContent>
                                <Typography component="h2" gutterBottom variant="h5">
                                    <Link to={"/"}>
                                        Certified {selectedProgramTrack[0].title} Professional
                                    </Link>
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Page>
    );
};

export default withRoot(withStyles(styles)(TrackDetails));