import React from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
    </div>
  );
}

export default App;
