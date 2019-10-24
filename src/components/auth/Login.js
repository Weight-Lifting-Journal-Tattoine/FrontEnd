import React from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as Yup from "yup";

const LoginForm = ({ errors, touched, setUser }) => {
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
        <label>Password</label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="******" />
      </fieldset>
      <button type="submit">Submit</button>
      <p>
        Not a member?<span> </span>
        <Link to="/">Register</Link>.
      </p>
    </Form>
  );
};

const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    Axios.post("auth/login", values).then(res => {
      if (res.data.token) {
        props.history.push("/dashboard");
        props.setUser(res.data.user);
        localStorage.setItem("id", res.data.user.id);
      }
    });
  }
})(LoginForm);

export default Login;
