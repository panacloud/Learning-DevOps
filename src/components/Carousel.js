import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { autoPlay } from "react-swipeable-views-utils";
import withStyles from "@material-ui/styles/withStyles";
import carouselData from "../services/carousel-service.json";
import { Grid } from "@material-ui/core";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  root: {
    display: "flex",
    boxShadow: "none !important",
  },
  cardMedia: {
    height: "300px",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cover: {
    height: "400px",
  },
  contentTitle: {
    color: "#706aaf",
  },
  findMore: {
    display: "flex",
    alignItems: "center",
    color: "#706aaf",
    fontWeight: "700",
    marginTop: "10px",
  },
  findMoreImg: {
    marginLeft: "25px",
    width: "53px",
    background: "#f4f5f6",
    padding: "10px",
    borderRadius: "34px",
  },
};

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  items = carouselData;

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;
    const filteredData = [];
    return (
      <Paper elevation={0}>
        <StaticQuery
          query={graphql`
            {
              allContentfulFranchisee {
                nodes {
                  courseCatalog {
                    programsAvailable {
                      title
                      slug
                      id
                      shortDescription {
                        shortDescription
                      }
                      image {
                        title
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const defaultData =
              data.allContentfulFranchisee.nodes[0].courseCatalog
                .programsAvailable;
            defaultData.forEach((dataItem, dataIndex) => {
              const filteredItem = Object.assign(
                {},
                {
                  node: {
                    id: dataItem.id,
                    excerpt: dataItem.shortDescription.shortDescription,
                    frontmatter: {
                      title: dataItem.title,
                      date: "Unknown",
                      path: "/programs/" + dataItem.slug,
                      image: {
                        publicURL: dataItem.image.file.url,
                      },
                    },
                  },
                }
              );
              filteredData.push(filteredItem);
            });
            this.items = filteredData;
          }}
        ></StaticQuery>

        <div data-aos="fade-up">
          <Typography>
            {(this.items[activeStep] || { title: "qwerty" }).title}
          </Typography>
          <AutoPlaySwipeableViews
            axis={"x"}
            enableMouseEvents
            index={activeStep}
            onChangeIndex={this.handleStepChange}
          >
            {this.items.length > 0
              ? this.items.map((item, index) => {
                  const {
                    node: {
                      excerpt,
                      frontmatter: {
                        path,
                        title,
                        image: { publicURL },
                      },
                    },
                  } = item;
                  return (
                    <div key={index}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Card className={classes.root}>
                          <Grid container justify="center">
                            <Grid item md={8} xs={12}>
                              <CardMedia
                                className={classes.cover}
                                image={publicURL}
                                title="Live from space album cover"
                              />
                            </Grid>
                            <Grid item md={4} xs={12}>
                              <CardContent className={classes.content}>
                                <Typography
                                  gutterBottom
                                  variant="h3"
                                  className={classes.contentTitle}
                                >
                                  {title}
                                </Typography>
                                <Typography variant="body1">
                                  {excerpt}

                                  <Link to={path}>
                                    <div className={classes.findMore}>
                                      Find moree
                                      <img
                                        className={classes.findMoreImg}
                                        src={require("../assets/arrow.png")}
                                        alt="arrow"
                                      />
                                    </div>
                                  </Link>
                                </Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </Card>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </AutoPlaySwipeableViews>
          <MobileStepper
            activeStep={activeStep}
            backButton={
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                size="small"
              >
                Back
              </Button>
            }
            nextButton={
              <Button
                disabled={activeStep === this.items.length - 1}
                onClick={this.handleNext}
                size="small"
              >
                Next
              </Button>
            }
            position="static"
            steps={this.items.length}
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Carousel);
