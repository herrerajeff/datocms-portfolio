require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Jeffrey Herrera`,
    titleTemplate: "%s → Jeffrey Herrera",
    description: `The Portfolio of Jeffrey Herrera`,
    url: "https://www.jeffreyherrera.com",
    twitterUsername: `@isthatjeff`,
    image: `src/images/seo.png`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        apiUrl: "https://site-api.datocms.com",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
