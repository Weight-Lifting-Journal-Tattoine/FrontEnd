import React from "react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

const LoginForm = ({ errors, touched }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const dummyCredentials = {
      username: "admin",
      password: "password"
    };

    Axios.post("auth/login", dummyCredentials).then(res => {
      console.log(res);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <label>Username</label>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="text" name="username" placeholder="Arnold" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="text" name="password" placeholder="******" />
      </fieldset>
      <button type="submit">Submit</button>
    </Form>
  );
};

const Login = withFormik({
  // ES6 method definition shorthand
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  /*
   * Old JS for the above would be:
   * mapPropsToValues: function () {...},
   */

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    const dummyCredentials = {
      username: "admin",
      password: "password"
    };

    Axios.post("auth/login", dummyCredentials).then(res => {
      console.log(res);
    });
  }
})(LoginForm);

export default Login;
