import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

import ButtonMui from "./reusable/ButtonMui";
import FigCell from "./reusable/FigCell";
import { useState } from "react";

const SecondPage = ({ figures, nextStepChange }) => {
  const [selected, setSelected] = useState({});

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
            title="Proceed to shipment"
            onClick={() => nextStepChange(selected)}
            className={`btn margin ${
              Object.keys(selected).length === 0 ? "disabled" : ""
            }`}
            disabled={Object.keys(selected).length === 0}
          />
        </div>
      </div>
    </div>
  );
};

SecondPage.propTypes = {
  figures: PropTypes.array.isRequired,
  nextStepChange: PropTypes.func.isRequired,
};

export default SecondPage;
