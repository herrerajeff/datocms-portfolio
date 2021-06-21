const linkResolver = require("./src/utils/link_resolver")

module.exports = {
  siteMetadata: {
    title: `Jeffrey Herrera`,
    description: `The Portfolio of Jeffrey Herrera`,
    author: `@isthatjeff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jeffrey Herrera`,
        short_name: `JH`,
        start_url: `/`,
        background_color: `#F59E0B`,
        theme_color: `#F59E0B`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "jh21",
        linkResolver: () => linkResolver,
        schemas: {
          about: require("./custom_types/about.json"),
        },
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
