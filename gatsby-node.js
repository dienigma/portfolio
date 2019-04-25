const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/src/blog.js")
  graphql(`
    allMarkdownRemark{
      edges{
        node{
          fields{
            slug
          }
        }
      }
    }
  `)

  // Get path to template.

  // get markdown data
  // create new pages.
}
