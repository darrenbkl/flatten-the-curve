import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

const Layout = ({ buildTime, children }) => {
  const timestamp = new Date(buildTime).toLocaleString('en-SG');
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <header>
          <Typography variant="h4" component="h1" gutterBottom>
            Flatten the Curve
          </Typography>
          
        </header>
        <main>{children}</main>
        <footer>Last updated at {timestamp} SGT</footer>
      </Box>
    </Container>
  );
};

export const query = graphql`
  query {
    site {
      buildTime
    }
  }
`;

export default Layout;
