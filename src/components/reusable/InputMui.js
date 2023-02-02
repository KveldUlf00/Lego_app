import PropTypes from "prop-types";
import { Controller, get, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
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
  name,
  label,
  registers,
  errors,
  required,
  className,
  disabled,
  pattern,
  patternMsg,
  maxLengthValue,
  maxLengthMessage,
  placeholderText,
}) => {
  const classes = useStyles();
  const methods = useFormContext();
  const { register } = useForm();

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
      render={(props) => (
        <TextField
          id={`id-${label}`}
          label={label}
          {...methods.register(name)}
          // inputRef={props.ref}
          // {...register(name, registers)}
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  registers: PropTypes.object.isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  required: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pattern: PropTypes.objectOf(PropTypes.string),
  patternMsg: PropTypes.string,
  maxLengthValue: PropTypes.number,
  maxLengthMessage: PropTypes.string,
  placeholderText: PropTypes.string,
};

InputMui.defaultProps = {
  required: false,
  className: "",
  disabled: false,
  pattern: null,
  patternMsg: "",
  maxLengthValue: null,
  maxLengthMessage: "",
  placeholderText: "",
};

export default InputMui;
