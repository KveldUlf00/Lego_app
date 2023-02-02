import { useState, useEffect } from "react";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { getFigs } from "../service/legoCalls";

function App() {
  const [step, setStep] = useState(1);
  const [figures, setFigures] = useState([]);
  const [chosenFigure, setChosenFigure] = useState({});

  const howManyFigures = 3;

  const nextStep = (elem = {}) => {
    setStep((origin) => origin + 1);
    if ("set_num" in elem) {
      setChosenFigure(elem);
    }
  };

  const resetStep = () => {
    setStep(1);
  };

  useEffect(() => {
    if (figures.length === 0 && step === 2) {
      const page = Math.floor(Math.random() * 130) + 1;
      const ids = [];
      while (ids.length !== howManyFigures) {
        const randNumber = Math.floor(Math.random() * 100);
        if (!ids.includes(randNumber)) {
          ids.push(randNumber);
        }
      }

      getFigs({ page: page })
        .then((res) => {
          const data = res.data.results;
          setFigures(data.filter((elem) => ids.includes(data.indexOf(elem))));
        })
        .catch((err) => console.error(err));
    }
  }, [figures.length, step]);

  switch (step) {
    case 1:
      return <FirstPage nextStepChange={nextStep} />;
    case 2:
      return <SecondPage nextStepChange={nextStep} figures={figures} />;
    case 3:
      return <ThirdPage resetStep={resetStep} chosenFigure={chosenFigure} />;
    default:
      return null;
  }
}

export default App;
