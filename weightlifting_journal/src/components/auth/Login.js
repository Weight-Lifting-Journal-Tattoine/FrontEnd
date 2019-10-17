import React from "react";
import { Formik } from "formik";

const Login = () => {
  return (
    <Formik>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </Formik>
  );
};

export default Login;
