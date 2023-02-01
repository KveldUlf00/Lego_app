import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import ButtonMui from "./reusable/ButtonMui";
import FigCell from "./reusable/FigCell";
import InputMui from "./reusable/InputMui";
import { useEffect, useState } from "react";

import { getParts } from "../service/legoCalls";

const ThirdPage = ({ resetStep, chosenFigure }) => {
  const [parts, setParts] = useState([]);

  const methods = useForm();

  const onSubmit = (data) => {
    console.log("submit!");
    console.log(data);
  };

  useEffect(() => {
    console.log(chosenFigure);
    getParts(chosenFigure.set_num)
      .then((res) => {
        const data = res.data.results;
        console.log(data);
        setParts(data.map((elem) => elem.part));
      })
      .catch((err) => console.error(err));
  }, [chosenFigure]);

  return (
    <div className="page">
      <div className="doubleBox">
        <div className="formBox">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <h1>SHIPPING DETAILS</h1>
              <div className="double">
                <InputMui
                  name="Name"
                  label="Name"
                  registers={{
                    required: "This field is required",
                  }}
                  required
                />
                <InputMui
                  name="Surname"
                  label="Surname"
                  registers={{
                    required: "This field is required",
                  }}
                  required
                />
              </div>
              <InputMui
                name="Phone"
                label="Phone Number"
                registers={{
                  required: "This field is required",
                }}
                required
              />
              <InputMui
                name="Email"
                label="Email"
                registers={{
                  required: "This field is required",
                }}
                required
              />
              <InputMui
                name="Birth"
                label="Date of birth"
                registers={{
                  required: "This field is required",
                }}
                required
              />
              <InputMui
                name="Adress"
                label="Adress"
                registers={{
                  required: "This field is required",
                }}
                required
              />
              <InputMui
                name="City"
                label="City"
                registers={{
                  required: "This field is required",
                }}
                required
              />
              <div className="double">
                <InputMui
                  name="State"
                  label="State"
                  registers={{
                    required: "This field is required",
                  }}
                  required
                />
                <InputMui
                  name="Zip"
                  label="Zip Code"
                  registers={{
                    required: "This field is required",
                  }}
                  required
                />
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="summaryBox">
          <FigCell
            data={chosenFigure}
            staticMode
            title="SUMMARY"
            parts={parts}
            btn={
              <ButtonMui
                title="Submit"
                type="submit"
                className="btn"
                onClick={methods.handleSubmit(onSubmit)}
              />
            }
          />
        </div>
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
