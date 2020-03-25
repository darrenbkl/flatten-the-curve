# Flatten The Curve

## Setup Google Sheet

Data is stored in google sheet, in order to test, [follow this guide](https://www.gatsbyjs.org/packages/gatsby-source-google-sheets) to setup Google API credentials.

Create a Google sheet with 1 sheet named "wfh", and 3 columns - "No.", "Company", "Status".

## Setup Environment Variables

Get this 2 credentials from the Google API that was setup in the previous step:

1. client_email
2. private_key

Export them as envvar using either OS or dotenv.

### Using OS envvar

```bash
export GATSBY_GOOGLE_CLIENT_EMAIL=....
export GATSBY_GOOGLE_PRIVATE_KEY="..."
```

### Using .env

1. Create `.env.development` in project root folder
2. Paste the following in the file

```text
GATSBY_GOOGLE_CLIENT_EMAIL=...
GATSBY_GOOGLE_PRIVATE_KEY="..."
```

## Run in Development Mode

```bash
gatsby develop
```

## Deploy

1. Signup a free account on [Netlify](https://www.netlify.com)
2. Link it to your forked Github repo
3. `git push`!
