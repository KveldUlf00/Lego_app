import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const ButtonMui = ({ className, disabled, onClick, title, type }) => {
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

ButtonMui.defaultProps = {
  className: "",
  disabled: false,
  type: "button",
};

export default ButtonMui;
