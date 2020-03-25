import React from "react";
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby";
import { Box, Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
          siteMetadata {
            github
            title
          }
        }
      }
    `
  );

  const classes = useStyles();
  const timestamp = new Date(data.site.buildTime).toLocaleString("en-SG");

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title}>
            Flatten the Curve
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            href={data.site.siteMetadata.github}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box my={4}>
          <header>
            <Typography variant="h4" component="h1" gutterBottom>
              Work from Home
            </Typography>
          </header>
          <main>{children}</main>
          <footer>Last updated at {timestamp} SGT</footer>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
