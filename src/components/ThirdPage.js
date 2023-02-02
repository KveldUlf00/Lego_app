import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

import ButtonMui from "./reusable/ButtonMui";
import FigCell from "./reusable/FigCell";
import InputMui from "./reusable/InputMui";

import axios from "axios";
import { getParts } from "../service/legoCalls";

const ThirdPage = ({ resetStep, chosenFigure }) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const regex = {
    birth: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
    email: /\S+@\S+\.\S+/,
    houseNumber: /^[0-9A-Za-z]+([-\/]){0,1}[0-9A-Za-z]*$/,
    phone: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    postalCode: /^[0-9]{5}$/,
    street: /^[A-Za-zĄąĆćĘęŁłóÓŹźŻżńŃŚś0-9 .-]*$/,
  };

  const methods = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    axios({
      method: "post",
      url: "http://127.0.0.1:4000/data",
      responseType: "application/json",
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          enqueueSnackbar("Data has been successfully submitted!", {
            variant: "success",
          });
          setTimeout(() => {
            setLoading(false);
            resetStep();
          }, "3000");
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err.message, {
          variant: "error",
        });
      });
  };

  useEffect(() => {
    getParts(chosenFigure.set_num)
      .then((res) => {
        const data = res.data.results;
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
                  required
                  maxLengthValue={30}
                  maxLengthMessage="The maximum field length is 30 characters."
                />
                <InputMui
                  name="Surname"
                  label="Surname"
                  required
                  maxLengthValue={30}
                  maxLengthMessage="The maximum field length is 30 characters."
                />
              </div>
              <InputMui
                name="Phone"
                label="Phone Number"
                required
                pattern={regex.phone}
                patternMsg="Wrong phone number format."
                maxLengthValue={20}
                maxLengthMessage="The maximum field length is 20 characters."
              />
              <InputMui
                name="Email"
                label="Email"
                required
                pattern={regex.email}
                patternMsg="Wrong email format."
                maxLengthValue={40}
                maxLengthMessage="The maximum field length is 40 characters."
              />
              <InputMui
                name="Birth"
                label="Date of birth"
                required
                pattern={regex.birth}
                patternMsg="This field contains invalid characters."
                placeholderText="mm/dd/yyyy"
              />
              <InputMui
                name="Adress"
                label="Adress"
                required
                pattern={regex.street}
                patternMsg="This field contains invalid characters."
                maxLengthValue={40}
                maxLengthMessage="The maximum field length is 40 characters."
              />
              <InputMui
                name="City"
                label="City"
                required
                pattern={regex.street}
                patternMsg="This field contains invalid characters."
                maxLengthValue={40}
                maxLengthMessage="The maximum field length is 40 characters."
              />
              <div className="double">
                <InputMui
                  name="State"
                  label="State"
                  required
                  pattern={regex.street}
                  patternMsg="This field contains invalid characters."
                  maxLengthValue={40}
                  maxLengthMessage="The maximum field length is 40 characters."
                />
                <InputMui
                  name="Zip"
                  label="Zip Code"
                  required
                  pattern={regex.postalCode}
                  patternMsg="This field contains invalid characters."
                  maxLengthValue={10}
                  maxLengthMessage="The maximum field length is 10 characters."
                  placeholderText="xxxxx"
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
                className="btn big"
                onClick={methods.handleSubmit(onSubmit)}
                disabled={loading}
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

export default ThirdPage;
