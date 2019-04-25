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

// const createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/src/blog.js")
//   const response = await graphql(`
//     allMarkdownRemark{
//       edges{
//         node{
//           fields{
//             slug
//           }
//         }
//       }
//     }
//   `)

//   response.data.allMarkdownRemark.edges.foreEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.fields.slug}`,
//       context: {
//         slug: edge.node.fields.slug,
//       },
//     })
//   })

  // Get path to template.

  // get markdown data
  // create new pages.
}

