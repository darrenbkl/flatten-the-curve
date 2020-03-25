require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const config = require("gatsby-plugin-config").default;

module.exports = {
  siteMetadata: {
    title: `Flatten the Curve`,
    github: `https://github.com/darrenbkl/flatten-the-curve`
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Montserrat",
                variants: ["300", "400", "500"]
              },
              {
                family: "Open Sans",
                variants: ["400", "600", "700"]
              }
            ]
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons"]
      }
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1G-cp5XamvC38FbCM4u33JTZFCWkFtP_dcw51CeQKg68",
        worksheetTitle: "wfh",
        credentials: {
          client_email: config.GATSBY_GOOGLE_CLIENT_EMAIL,
          private_key: config.GATSBY_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } }
  ]
};
