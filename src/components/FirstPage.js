import PropTypes from "prop-types";

import ButtonMui from "./reusable/ButtonMui";

const FirstPage = ({ nextStepChange }) => {
  return (
    <div className="page">
      <div className="container">
        <div>
          <h1>LEGO MINIFIGS MYSTERY BOX</h1>
          <ButtonMui
            title="Let's go!"
            onClick={nextStepChange}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};

FirstPage.propTypes = {
  nextStepChange: PropTypes.func.isRequired,
};

export default FirstPage;
