import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

/*=============== MAIN FORM ===============*/
function CreateExercise({ errors, touched }) {
  const fields = ["name", "sets", "reps", "weight"];

  return (
    <Form>
      {fields.map((item, index) => {
        const error = Boolean(touched[item] && errors[item]);

        return (
          <Label key={index} forhtml={item} error={error.toString()}>
            {item.charAt(0).toUpperCase() + item.slice(1)}:
            <StyledField
              type={item === "name" ? "text" : "number"}
              name={item}
              placeholder={
                item === "name"
                  ? error
                    ? errors[item]
                    : "e.g. Bench Press"
                  : item === "weight"
                  ? error
                    ? "Must be 0 or higher"
                    : "e.g. 1 (lbs)"
                  : error
                  ? "Must be 1 or higher"
                  : "e.g. 1"
              }
              error={error.toString()}
            />
            <br />
          </Label>
        );
      })}

      <Button>Add Exercise</Button>
    </Form>
  );
}

/*=============== FORMIK WRAP ===============*/
const FormikCreateExercise = withFormik({
  mapPropsToValues({ name, sets, reps, weight, journal, user }) {
    return {
      journalId: journal,
      userId: user.id,
      name: name || "",
      sets: sets || 0,
      reps: reps || 0,
      weight: weight || 0
    };
  },

  /*===== Validation =====*/
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    sets: Yup.number()
      .min(1, "Sets must be 1 or higher")
      .required("Set amount is required"),
    reps: Yup.number()
      .min(1, "Reps must be 1 or higher")
      .required("Rep amount is required"),
    weight: Yup.number()
      .min(0, "Weight must 0 or higher")
      .required()
  }),

  /*===== Submit Handler =====*/
  handleSubmit(values, { props, setSubmitting, resetForm }) {
    axios
      .post("restricted/exercises/", values)
      .then(response => {
        console.log(response);
        resetForm();
        setSubmitting(false);
        props.setExercises([...props.exercises, response.data.exercise]);
        props.setButton(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
      });
  }
})(CreateExercise);

/*=============== STYLED COMPONENTS ===============*/
const Label = styled.label`
  color: ${props => (props.error === "true" ? "red" : "black")};
`;

const StyledField = styled(Field)`
  margin-top: 15px;
  margin-left: 5px;
  color: ${props => (props.error === "true" ? "red" : "black")};
  border: 1px solid ${props => (props.error === "true" ? "red" : "#cccccc")};
`;

const Button = styled.button`
  margin-top: 15px;
`;

/*=============== EXPORT ===============*/
export default FormikCreateExercise;
