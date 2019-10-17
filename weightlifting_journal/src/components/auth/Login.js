import React from "react";
import { Formik } from "formik";
import Axios from "axios";

const Login = () => {
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
    <Formik>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </Formik>
  );
};

export default Login;
