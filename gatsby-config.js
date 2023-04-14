/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `qr-code-component`,
    siteUrl: `https://qrcodecomponentmain.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    'gatsby-plugin-postcss'
  ],
}
