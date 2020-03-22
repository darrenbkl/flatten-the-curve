import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const policies = [
  {
    value: "WFH",
    label: "WFH"
  },
  {
    value: "Rotation",
    label: "Rotation"
  },
  {
    value: "Other",
    label: "Other"
  }
];

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

const FormDialog = props => {
  const classes = useStyles();
  const [policy, setPolicy] = React.useState("WFH");
  const [company, setCompany] = React.useState("");
  const [other, setOther] = React.useState("");
  const [botField, setBotField] = React.useState("");
  
  const handlePolicyChange = event => {
    setPolicy(event.target.value);
  };

  const handleCompanyChange = e => {
    setCompany(e.target.value);
  };

  const handleOtherChange = e => {
    setOther(e.target.value);
  };

  const handleBotFieldChange = e => {
    setBotField(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(company, policy, other, botField);
  };

  return (
    <div>
      <Dialog
        open={props.showModal}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Tell me more</DialogTitle>
        <form
          id="myFormId"
          name="addCompanyForm"
          className={classes.root}
          noValidate
          autoComplete="off"
          data-netlify="true"
          data-netlify-honeypot="botField"
        >
          <DialogContent>
            <input type="hidden" name="form-name" value="addCompanyForm" />
            <p hidden>
              <label>
                Honey Pot Field:{" "}
                <input name="botField" onChange={handleBotFieldChange} />
              </label>
            </p>
            <TextField
              margin="dense"
              id="company"
              label="Company Name"
              fullWidth
              onChange={handleCompanyChange}
              required={true}
            />

            <TextField
              id="standard-select-policy"
              select
              label="Select"
              value={policy}
              onChange={handlePolicyChange}
              helperText="Select your company policy"
            >
              {policies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {policy === "Other" ? (
              <TextField
                margin="dense"
                id="other"
                label="Indicate others"
                fullWidth
                required={true}
                onChange={handleOtherChange}
              />
            ) : (
              <div />
            )}
          </DialogContent>

          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              form="myFormId"
              onClick={handleSubmit}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormDialog;
