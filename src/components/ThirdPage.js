import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import InputMui from "./reusable/InputMui";

const ThirdPage = ({ resetStep, chosenFigure }) => {
  const {
    handleSubmit,
    register,
    errors,
    control,
    setError,
    reset,
    setValue,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log("submit!");
    console.log(data);
  };

  return (
    <div className="page">
      <div className="doubleBox">
        <div className="formBox">
          <h1>SHIPPING DETAILS</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="double">
              <InputMui
                className="input"
                name="Name"
                label="Name"
                registers={{
                  required: "This field is required",
                }}
              />
            </div>
          </form>
        </div>
        <div className="summaryBox">xDDD</div>
      </div>
    </div>
  );
};

ThirdPage.propTypes = {
  resetStep: PropTypes.func.isRequired,
  chosenFigure: PropTypes.object.isRequired,
};

// SecondPage.defaultProps = {
//     className: "",
// };

export default ThirdPage;
