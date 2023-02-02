import PropTypes from "prop-types";
import { Controller, get, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff",

      "&::after": {
        borderColor: "#ff9933",
      },
    },
    "& label.Mui-focused": {
      color: "#ff9933",
    },
  },
}));

const InputMui = ({
  disabled,
  errors,
  label,
  maxLengthMessage,
  maxLengthValue,
  name,
  pattern,
  patternMsg,
  placeholderText,
  required,
}) => {
  const classes = useStyles();
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      rules={{
        required: required ? "This field is required." : false,
        pattern: {
          value: pattern,
          message: patternMsg,
        },
        maxLength: {
          value: maxLengthValue,
          message: maxLengthMessage,
        },
      }}
      render={() => (
        <TextField
          id={`id-${label}`}
          label={label}
          {...methods.register(name)}
          errors={errors}
          className={classes.root}
          error={!!get(methods.errors, name) || false}
          disabled={disabled}
          variant="filled"
          color="primary"
          fullWidth
          margin="normal"
          placeholder={placeholderText}
          helperText={
            <ErrorMessage
              name={name}
              errors={methods.errors}
              render={({ message }) => (
                <span className="errorMessage">{message}</span>
              )}
            />
          }
        />
      )}
    />
  );
};

InputMui.propTypes = {
  disabled: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string.isRequired,
  maxLengthMessage: PropTypes.string,
  maxLengthValue: PropTypes.number,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.objectOf(PropTypes.string),
  patternMsg: PropTypes.string,
  placeholderText: PropTypes.string,
  required: PropTypes.bool,
};

InputMui.defaultProps = {
  disabled: false,
  maxLengthMessage: "",
  maxLengthValue: null,
  pattern: null,
  patternMsg: "",
  placeholderText: "",
  required: false,
};

export default InputMui;
