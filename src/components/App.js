import { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((origin) => origin + 1);
  };

  const previousStep = () => {
    setStep((origin) => origin - 1);
  };

  switch (step) {
    case 1:
      return <FirstPage nextStepChange={nextStep} />;
    case 2:
      return (
        <SecondPage
          previousStepChange={previousStep}
          nextStepChange={nextStep}
        />
      );
    case 3:
      return <ThirdPage previousStepChange={previousStep} />;
    default:
      return null;
  }
}

export default App;
