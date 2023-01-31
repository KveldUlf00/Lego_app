import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const InputMui = ({
  name,
  label,
  registers,
  errors,
  required,
  className,
  disabled,
}) => {
  const { register } = useForm();
  return (
    <TextField
      id={`id-${label}`}
      name={name}
      label={label}
      {...register(name, registers)}
      errors={errors}
      required={required}
      className={className}
      disabled={disabled}
      variant="filled"
      color="primary"
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
};

InputMui.defaultProps = {
  required: false,
  className: "",
  disabled: false,
};

export default InputMui;
