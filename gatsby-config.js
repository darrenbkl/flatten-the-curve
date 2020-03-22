module.exports = {
  siteMetadata: {
    title: `Flatten the Curve`,
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
                variants: ["300", "400", "500"],
              },
              {
                family: "Source Serif Pro",
                variants: ["400", "600", "700"],
              }
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
        ],
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1G-cp5XamvC38FbCM4u33JTZFCWkFtP_dcw51CeQKg68",
        worksheetTitle: "wfh",
        credentials: {
          "type": "service_account",
          "project_id": process.env.GATSBY_GOOGLE_PROJECT_ID,
          "private_key_id": process.env.GATSBY_GOOGLE_PRIVATE_KEY_ID,
          "private_key": process.env.GATSBY_GOOGLE_PRIVATE_KEY,
          "client_email": process.env.GATSBY_GOOGLE_CLIENT_EMAIL,
          "client_id": process.env.GATSBY_GOOGLE_CLIENT_ID,
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": process.env.GATSBY_GOOGLE_CLIENT_X509_CERT_URL
        }      
      },
    },
  ],
};
