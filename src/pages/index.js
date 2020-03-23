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

const initalState = { policy: "WFH" };

const BlogIndex = ({ data }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = React.useState(initalState);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const rows = data.allGoogleSheetWfhRow.edges;

  const handleClick = () => setShowModal(true);
  const handleClose = () => {
    setState(initalState);
    setShowModal(false);
  };

  const formName = "addCompanyForm";

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...state
      })
    })
      .then(() => {
        setState(initalState);
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

      <div type="hidden" style={{ display: "none" }}>
        <form
          name="addCompanyForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="botField"
        >
          <input type="hidden" name="botField" />
          <input type="hidden" name="form-name" value="addCompanyForm" />
          <input id="name" type="text" name="company" required />
          <input id="policy" type="text" name="policy" required />
          <input id="other" type="text" name="other" required />
          <input type="submit" value="submit" />
        </form>
      </div>

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
        formName={formName}
        state={state}
        handleChange={handleChange}
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
