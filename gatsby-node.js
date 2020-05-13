const path = require(`path`);

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
/*exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/details` page.
  if (page.path.match(/^\/details/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/details/*";

    // Update the page.
    createPage(page);
  }
};*/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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
              }
            }
          }
        }
      }
    }
  `)
  //console.log("Result: " + JSON.stringify(result, null, 4));
  const availablePrograms = result.data.allContentfulFranchisee.edges[0].node.courseCatalog.programsAvailable;
  //console.log("Available Programs: " + JSON.stringify(availablePrograms, null, 4));
  availablePrograms.map((program) => {
    //console.log("Programs: " + JSON.stringify(program, null, 4));
    createPage({
      path: '/programs/' + program.slug + "/",
      component: path.resolve(`./src/templates/program.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        program: program,
      },
    })
  })
}


/*
There are two different ways to create dynamic pages:
1. This method will create a HTML page in the public directory and uses data that is available at build time:
https://www.gatsbyjs.org/tutorial/part-seven/
2. This method does not create a HTML page because it gets data at run time just like React:
https://stackoverflow.com/questions/55756994/how-to-create-dynamic-route-in-gatsby
Here we are using method 1
*/



