import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.showModal}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Tell me more</DialogTitle>
        <form
          id="myFormId"
          name={props.formName}
          className={classes.root}
          noValidate
          autoComplete="off"
          data-netlify="true"
          data-netlify-honeypot="botField"
          onSubmit={handleSubmit(props.handleSubmit)}
        >
          <DialogContent>
            <input type="hidden" name="form-name" value="addCompanyForm" />
            <p hidden>
              <label>
                Honey Pot Field:{" "}
                <input name="botField" onChange={props.handleChange} />
              </label>
            </p>
            <TextField
              margin="dense"
              id="company"
              label="Company Name"
              name="company"
              fullWidth
              onChange={props.handleChange}
              required={true}
              inputRef={register({ required: true })}
              // helperText={errors.company && 'Required'}
              error={!!errors.company}
              inputProps={{
                maxLength: 30
              }}
            />
            <TextField
              id="standard-select-policy"
              select
              label="Policy"
              name="policy"
              value={props.state.policy}
              onChange={props.handleChange}
            >
              {policies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {props.state.policy === "Other" ? (
              <TextField
                margin="dense"
                id="other"
                label="Indicate others"
                name="other"
                fullWidth
                required={true}
                onChange={props.handleChange}
                inputRef={register({ required: true })}
                // helperText={errors.other && 'Required'}
                error={!!errors.other}
                inputProps={{
                  maxLength: 30
                }}
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
              // onClick={handleSubmit}
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
