import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withRoot from "../utils/withRoot";
import withStyles from "@material-ui/styles/withStyles";
import aboutImage from '../assets/images/project-piaic.png'

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
        <Fragment>
            <div className="section">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-6" >
                            <img src={aboutImage} alt="about" />
                        </div>
                        <div className="col-md-6" >
                            <div className="d-flex" >
                                <h2>About Us</h2>
                            </div>
                            <p>Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.</p>
                            <div class="read-more-1 size-4" >
                                <a href="/" >Read More <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

RecentProjects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(RecentProjects));
