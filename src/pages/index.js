import { graphql } from "gatsby";
import React, { useState } from "react";
import FormDialog from "../components/Dialog";
import Table from "../components/Table";
import Layout from "../layout/Layout";
import Paragraph from "../layout/paragraph";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  margin: {
    margin: theme.spacing(1, 0)
  }
}));

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const BlogIndex = ({ data }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const rows = data.allGoogleSheetWfhRow.edges;

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (company, policy, other, botField) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "addCompanyForm",
        company: company,
        policy: policy,
        other: other,
        botField: botField
      })
    })
      .then(() => {
        setShowModal(false);
      })
      .catch(error => alert(error));
  };

  return (
    <Layout buildTime={data.site.buildTime}>
      <Paragraph>
        List of companies in Singapore that enforces social distancing and work
        from home policy.
      </Paragraph>
      <Paragraph>This is a community project.</Paragraph>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
        className={classes.margin}
        endIcon={<Icon>favorite</Icon>}
      >
        ADD YOUR COMPANY
      </Button>

      <FormDialog
        handleClick={handleClick}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        showModal={showModal}
      />

      <Table data={rows} />
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      buildTime
    }
    allGoogleSheetWfhRow {
      edges {
        node {
          company
          no
          status
        }
      }
    }
  }
`;
