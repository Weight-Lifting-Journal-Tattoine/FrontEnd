import React from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as Yup from "yup";

const RegisterForm = ({ errors, touched, setUser }) => {
  return (
    <Form>
      <fieldset>
        <label>Username</label>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="text" name="username" placeholder="TheGovernator47" />
      </fieldset>
      <fieldset>
        <label>First Name</label>
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}
        <Field type="text" name="firstName" placeholder="Arnold" />
      </fieldset>
      <fieldset>
        <label>Last Name</label>
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <Field type="text" name="lastName" placeholder="Schwarzenegger" />
      </fieldset>
      <fieldset>
        <label>Email</label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="text" name="email" placeholder="arnold@strong.com" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="******" />
      </fieldset>
      <button type="submit">Submit</button>
      <p>
        Already a member?<span> </span>
        <Link to="/login">Login</Link>.
      </p>
    </Form>
  );
};

const Register = withFormik({
  // ES6 method definition shorthand
  mapPropsToValues({ username, password, firstName, lastName, email }) {
    return {
      username: username || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || ""
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
    Axios.post("auth/register", values).then(res => {
      if (res.data.token) {
        props.history.push("/dashboard");
        props.setUser(res.data.user);
      }
      console.log(res);
    });
  }
})(RegisterForm);

export default Register;
