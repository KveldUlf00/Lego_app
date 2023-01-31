import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const ButtonMui = ({ title, onClick, className, disabled }) => {
  return (
    <Button
      className={className}
      variant="contained"
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
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonMui.defaultProps = {
  className: "",
  disabled: false,
};

export default ButtonMui;
