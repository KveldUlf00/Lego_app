import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

import ButtonMui from "./reusable/ButtonMui";
import FigCell from "./reusable/FigCell";
import { useState } from "react";

const SecondPage = ({ nextStepChange, figures }) => {
  const [selected, setSelected] = useState({});
  console.log(figures);

  return (
    <div className="page">
      <div className="container">
        <div>
          <h1 className="marginBottom">CHOOSE YOUR MINIFIG</h1>
          <div className="dataBox">
            {figures.length === 0 ? (
              <CircularProgress />
            ) : (
              figures.map((elem) => (
                <FigCell
                  active={elem.set_num === selected?.set_num}
                  data={elem}
                  setSelected={setSelected}
                  key={`key-${elem.set_num}`}
                />
              ))
            )}
          </div>
          <ButtonMui
            title="PROCEED TO SHIPMENT"
            onClick={() => nextStepChange(selected)}
            className="btn margin"
            disabled={Object.keys(selected).length === 0}
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
