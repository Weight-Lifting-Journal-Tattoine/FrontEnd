import React from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import CreateExercise from "./components/journals/CreateExercise.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Route path="/exercise" component={CreateExercise} />
    </div>
  );
}

export default App;
