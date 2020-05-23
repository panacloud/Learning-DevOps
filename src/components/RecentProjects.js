import React from "react";
import PropTypes from "prop-types";
import withRoot from "../utils/withRoot";
import withStyles from "@material-ui/styles/withStyles";
import projectpiaic from '../assets/images/project-piaic.jpg'

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
    sectionTitle: {
        textAlign: "center",
    },
});

const RecentProjects = (props) => {
    return (
        <div className="section card-main bg-even">
            <div className="container" >
                <div className="d-flex" >
                    <h2>Recent Projects</h2>
                </div>
                <div className="row" >
                    <div className="col-md-4" >
                        <div className="card">
                            <div className="card-head">
                                <img src={projectpiaic} alt="projectpiaic" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <p className="badge" >PIAIC</p>
                                    <h4>Presidential Initiative For Artificial Intelligence And Computing</h4>
                                    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. </p>
                                </div>
                                <div class="read-more-1 size-4" >
                                    <a href="/" >View All <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="card">
                            <div className="card-head">
                                <img src={projectpiaic} alt="projectpiaic" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <p className="badge" >PIAIC</p>
                                    <h4>Presidential Initiative For Artificial Intelligence And Computing</h4>
                                    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. </p>
                                </div>
                                <div class="read-more-1 size-4" >
                                    <a href="/" >View All <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="card">
                            <div className="card-head">
                                <img src={projectpiaic} alt="projectpiaic" />
                            </div>
                            <div className="card-body">
                                <div>
                                    <p className="badge" >PIAIC</p>
                                    <h4>Presidential Initiative For Artificial Intelligence And Computing</h4>
                                    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research...</p>
                                </div>
                                <div class="read-more-1 size-4" >
                                    <a href="/" >View All <i className="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <div className="read-more-stripe" >
                            <h5>MISSION VISION OBJECTIVE</h5>
                            <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.</p>
                            <div class="read-more-1 size-4" >
                                <a href="/" >View All <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecentProjects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(RecentProjects));
