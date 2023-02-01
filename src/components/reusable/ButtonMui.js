import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const ButtonMui = ({ title, type, onClick, className, disabled }) => {
  return (
    <Button
      className={className}
      variant="contained"
      type={type}
      onClick={onClick}
      title={title}
      alt={title}
      color="primary"
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

ButtonMui.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonMui.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
};

export default ButtonMui;
