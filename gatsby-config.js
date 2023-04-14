/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `qr-code-component`,
    siteUrl: `https://qr-code-component-git-main-muniruissah.vercel.app/`,
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
