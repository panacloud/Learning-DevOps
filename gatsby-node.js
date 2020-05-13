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
console.log(path);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allContentfulProgram {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allContentfulProgram.edges.forEach((node) => {
    console.log(node);
    createPage({
      path: `${node.node.slug}`,
      component: path.resolve(`./src/templates/name.js`),
      context: {
        node,
        // Data passed to context is available
        // in page queries as GraphQL variables.
        firstName: "zia",
        lastName: "khan",
      },
    });
  });
};
