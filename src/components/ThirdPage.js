import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";

import ButtonMui from "./reusable/ButtonMui";
import FigCell from "./reusable/FigCell";
import InputMui from "./reusable/InputMui";
import { useEffect, useState } from "react";

import { getParts } from "../service/legoCalls";

const ThirdPage = ({ resetStep, chosenFigure }) => {
  const [parts, setParts] = useState([]);

  const regex = {
    email: /\S+@\S+\.\S+/,
    houseNumber: /^[0-9A-Za-z]+([-\/]){0,1}[0-9A-Za-z]*$/,
    phone: /^[+]*[(]{0,1}[0-9, +]{1,4}[)]{0,1}[-\s\.\/0-9]*$/,
    postalCode: /^[0-9]{2}-[0-9]{3}$/,
    street: /^[A-Za-zĄąĆćĘęŁłóÓŹźŻżńŃŚś0-9 .-]*$/,
  };

  const methods = useForm();

  const onSubmit = (data) => {
    console.log("submit!");
    console.log(data);

    try {
      // const { data } = await canVote(editionId, formData);
      // setShowSecondStep(data.can_vote && !data.voted);
      // setDialogIsOpen((data.can_vote && data.voted) || !data.can_vote);
      window.scrollTo(0, 0);
    } catch (e) {
      // enqueueSnackbar(
      //   e.response?.data?.message
      //     ? e.response?.data?.message
      //     : 'Nie udało się oddać głosu',
      //   { variant: 'error' },
      // );
    }
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
              />
              <InputMui
                name="Email"
                label="Email"
                required
                pattern={regex.email}
                patternMsg="Wrong email format."
              />
              <InputMui name="Birth" label="Date of birth" required />
              <InputMui
                name="Adress"
                label="Adress"
                required
                pattern={regex.street}
                patternMsg="This field contains invalid characters."
              />
              <InputMui
                name="City"
                label="City"
                required
                pattern={regex.street}
                patternMsg="This field contains invalid characters."
              />
              <div className="double">
                <InputMui
                  name="State"
                  label="State"
                  required
                  pattern={regex.street}
                  patternMsg="This field contains invalid characters."
                />
                <InputMui
                  name="Zip"
                  label="Zip Code"
                  required
                  pattern={regex.postalCode}
                  patternMsg="This field contains invalid characters."
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
