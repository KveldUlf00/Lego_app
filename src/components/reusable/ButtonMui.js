import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const ButtonMui = ({ title, onClick, className }) => {
  return (
    <Button
      className={className}
      variant="contained"
      onClick={onClick}
      title={title}
      alt={title}
      color="primary"
    >
      {title}
    </Button>
  );
};

ButtonMui.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ButtonMui.defaultProps = {
  className: "",
};

export default ButtonMui;
