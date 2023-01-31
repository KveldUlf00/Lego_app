import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

import ButtonMui from "./reusable/ButtonMui";

const SecondPage = ({ nextStepChange, figures }) => {
  console.log(figures);
  return (
    <div className="page">
      <div className="container">
        <div>
          <h1>CHOOSE YOUR MINIFIG</h1>
          <div className="dataBox">
            {figures.length === 0 ? <CircularProgress /> : <p>super jest</p>}
          </div>
          <ButtonMui
            title="PROCEED TO SHIPMENT"
            onClick={nextStepChange}
            className="btn"
          />
        </div>
      </div>
    </div>
  );
};

SecondPage.propTypes = {
  nextStepChange: PropTypes.func.isRequired,
  figures: PropTypes.array.isRequired,
};

// SecondPage.defaultProps = {
//     className: "",
// };

export default SecondPage;
