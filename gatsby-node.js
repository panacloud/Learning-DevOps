


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/details` page.
  if (page.path.match(/^\/details/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/details/*";

    // Update the page.
    createPage(page);
  }
};

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  createPage({
    path: '/my/name/',
    component: path.resolve(`./src/templates/name.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      firstName: 'zia',
      lastName: "khan"
    },
  })
}


/*
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
  
  result.data.allContentfulFranchisee.edges[0].node.courseCatalog
  .programsAvailable.forEach(({ program }) => {
    createPage({
      path: '/zia/' + program.slug,
      component: path.resolve(`./src/templates/program.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: 'zia/' + program.slug,
      },
    })
  })*/
