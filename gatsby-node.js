const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //  Detail Programs Pages
  const detailProgram = await graphql(`
    query {
      allContentfulFranchisee {
        edges {
          node {
            courseCatalog {
              programsAvailable {
                slug
                title
                shortDescription {
                  childMarkdownRemark {
                    html
                  }
                }
                image {
                  file {
                    url
                  }
                }
                longDescription {
                  json
                }
                technicalTrack {
                  title
                  slug
                  objective {
                    childMarkdownRemark {
                      html
                    }
                  }
                  certifications {
                    title
                    url
                  }
                  description {
                    json
                  }
                  courses {
                    courseNumber
                    title
                    certification {
                      title
                      url
                    }
                    quarter
                    track {
                      courses {
                        quarter
                      }
                    }
                  }
                }

                innovationTrack {
                  title
                  slug
                  objective {
                    childMarkdownRemark {
                      html
                    }
                  }
                  certifications {
                    title
                    url
                  }
                  description {
                    json
                  }
                  courses {
                    courseNumber
                    title
                    certification {
                      title
                      url
                    }
                    quarter
                    track {
                      courses {
                        quarter
                      }
                    }
                  }
                }

                appDevelopmentTrack {
                  title
                  slug
                  objective {
                    childMarkdownRemark {
                      html
                    }
                  }
                  certifications {
                    title
                    url
                  }
                  description {
                    json
                  }
                  courses {
                    courseNumber
                    title
                    certification {
                      title
                      url
                    }
                    quarter
                    track {
                      courses {
                        quarter
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const availablePrograms =
    detailProgram.data.allContentfulFranchisee.edges[0].node.courseCatalog
      .programsAvailable;

  var technicalTrack;
  let isDoOnceFlag = true;
  availablePrograms.map((program) => {
    createPage({
      path: "/programs/" + program.slug + "/",
      component: path.resolve(`./src/templates/program.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        program: program,
      },
    });

    technicalTrack = program.technicalTrack;

    createPage({
      path: "/programs/tracks/" + technicalTrack.slug + "/",
      component: path.resolve(`./src/templates/track.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        track: technicalTrack,
      },
    });

    technicalTrack.courses.map((course) => {
      createPage({
        path: "/programs/tracks/courses/" + course.courseNumber + "/",
        component: path.resolve(`./src/templates/course.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          course: course,
        },
      });
    });

    innovationTrack = program.innovationTrack;
    createPage({
      path: "/programs/tracks/" + innovationTrack.slug + "/",
      component: path.resolve(`./src/templates/track.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        track: innovationTrack,
      },
    });
    innovationTrack.courses.map((course) => {
      createPage({
        path: "/programs/tracks/courses/" + course.courseNumber + "/",
        component: path.resolve(`./src/templates/course.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          course: course,
        },
      });
    });

    appDevelopmentTrack = program.appDevelopmentTrack;
    createPage({
      path: "/programs/tracks/" + appDevelopmentTrack.slug + "/",
      component: path.resolve(`./src/templates/track.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        track: appDevelopmentTrack,
      },
    });
    appDevelopmentTrack.courses.map((course) => {
      createPage({
        path: "/programs/tracks/courses/" + course.courseNumber + "/",
        component: path.resolve(`./src/templates/course.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          course: course,
        },
      });
    });

    if (isDoOnceFlag) {
      isDoOnceFlag = false;

      innovationTrack = program.innovationTrack;

      createPage({
        path: "/programs/tracks/" + innovationTrack.slug + "/",
        component: path.resolve(`./src/templates/track.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          track: innovationTrack,
        },
      });

      appDevelopmentTrack = program.appDevelopmentTrack;

      createPage({
        path: "/programs/tracks/" + appDevelopmentTrack.slug + "/",
        component: path.resolve(`./src/templates/track.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          track: appDevelopmentTrack,
        },
      });
    }
  });
};

/*
There are two different ways to create dynamic pages:
1. This method will create a HTML page in the public directory and uses data that is available at build time:
https://www.gatsbyjs.org/tutorial/part-seven/
2. This method does not create a HTML page because it gets data at run time just like React:
https://stackoverflow.com/questions/55756994/how-to-create-dynamic-route-in-gatsby
Here we are using method 1
*/

// Implement the Gatsby API “onCreatePage”. This is
//alled after every page is created.
//exports.onCreatePage = async ({ page, actions }) => {
//  const { createPage } = actions;

// Only update the `/details` page.
//  if (page.path.match(/^\/details/)) {
// page.matchPath is a special key that's used for matching pages
// with corresponding routes only on the client.
//    page.matchPath = "/details/*";

// Update the page.
//    createPage(page);
//  }};
//}
