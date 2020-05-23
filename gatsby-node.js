const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //  Detail Programs Pages
  const detailProgram = await graphql(`
    query {
      allContentfulFranchisee {
        edges {
          node {
            instructors {
              name
              slug
              description {
                json
              }
              url
              youTubeVideo
              picture {
                file {
                  url
                }
              }
            }
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
                    description {
                      childMarkdownRemark {
                        html
                      }
                    }
                    certification {
                      title
                      url
                    }
                    textBooks {
                      title
                      authors
                      url
                    }
                    referenceBooks {
                      title
                      authors
                      url
                    }
                    sections {
                      title
                      serialNumber
                      weeks
                      quiz {
                        title
                        week
                      }
                      lineItem {
                        title
                        shortDescription {
                          childMarkdownRemark {
                            html
                          }
                        }
                      }
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
                    description {
                      childMarkdownRemark {
                        html
                      }
                    }
                    certification {
                      title
                      url
                    }
                    textBooks {
                      title
                      authors
                      url
                    }
                    referenceBooks {
                      title
                      authors
                      url
                    }
                    sections {
                      title
                      serialNumber
                      weeks
                      quiz {
                        title
                        week
                      }
                      lineItem {
                        title
                        shortDescription {
                          childMarkdownRemark {
                            html
                          }
                        }
                      }
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
                    description {
                      childMarkdownRemark {
                        html
                      }
                    }
                    certification {
                      title
                      url
                    }
                    textBooks {
                      title
                      authors
                      url
                    }
                    referenceBooks {
                      title
                      authors
                      url
                    }
                    sections {
                      title
                      serialNumber
                      weeks
                      quiz {
                        title
                        week
                      }
                      lineItem {
                        title
                        shortDescription {
                          childMarkdownRemark {
                            html
                          }
                        }
                      }
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

  const instructors = detailProgram.data.allContentfulFranchisee.edges[0].node.instructors;

  instructors.map((instructor) => {
    createPage({
      path: "/instructors/" + instructor.slug + "/",
      component: path.resolve(`./src/templates/instructor.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        instructor: instructor,
      },
    })
  });

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

    const techCoursePrerequisite = [];
    technicalTrack.courses.map((course) => {
      createPage({
        path: "/programs/tracks/courses/" + course.courseNumber + "/",
        component: path.resolve(`./src/templates/course.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          course: course,
          track: technicalTrack,
          prereq: [...techCoursePrerequisite],
        },
      });
      techCoursePrerequisite.push(course);
    });

    if (isDoOnceFlag) {
      //Becuase innovation and app development tracks are in
      //all programs therefore create them only once
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

      const innovCoursePrerequisite = [];
      innovationTrack.courses.map((course) => {
        createPage({
          path: "/programs/tracks/courses/" + course.courseNumber + "/",
          component: path.resolve(`./src/templates/course.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            course: course,
            track: innovationTrack,
            prereq: [...innovCoursePrerequisite],
          },
        });
        innovCoursePrerequisite.push(course);
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

      appDevCoursePrerequisite = [];

      appDevelopmentTrack.courses.map((course) => {
        createPage({
          path: "/programs/tracks/courses/" + course.courseNumber + "/",
          component: path.resolve(`./src/templates/course.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            course: course,
            track: appDevelopmentTrack,
            prereq: [...appDevCoursePrerequisite],
          },
        });
        appDevCoursePrerequisite.push(course);
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
