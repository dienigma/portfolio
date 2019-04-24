module.exports = {
  siteMetadata: {
    title: "Chinmay Joshi",
    author: "Chinmay Mandar Joshi",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
