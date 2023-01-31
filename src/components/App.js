import { useState, useEffect } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

import { getFigs } from "../service/legoCalls";

function App() {
  const [step, setStep] = useState(1);
  const [figures, setFigures] = useState([]);

  const howManyFigures = 3;

  const nextStep = () => {
    setStep((origin) => origin + 1);
  };

  const previousStep = () => {
    setStep((origin) => origin - 1);
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
  }, [step]);

  switch (step) {
    case 1:
      return <FirstPage nextStepChange={nextStep} />;
    case 2:
      return (
        <SecondPage
          previousStepChange={previousStep}
          nextStepChange={nextStep}
          figures={figures}
        />
      );
    case 3:
      return <ThirdPage previousStepChange={previousStep} />;
    default:
      return null;
  }
}

export default App;
