const path = require("path"),
  fs = require("fs");

// Create pages from markdown files.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return Promise.all(
    ["programs", "team"].map(async (item) => {
      const result = await graphql(
        `
        query {
          ${item}: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/${item}/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date(formatString: "DD MMMM YYYY")
                }
                excerpt
              }
            }
          }
        }
      `
      );
      return Promise.all(
        result.data[item].edges.map(({ node }) => {
          const component = fs.existsSync(`src/templates/${item}.js`)
            ? // Use specific template for item, e.g., programs.js, if it exists.
              path.resolve(`src/templates/${item}.js`)
            : // Or use general template.
              path.resolve(`src/templates/general.js`);
          return createPage({
            component,
            path: node.frontmatter.path,
            context: { id: node.id },
          });
        })
      );
    })
  );
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};
