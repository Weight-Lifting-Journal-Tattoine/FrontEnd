import React from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/journals/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" exact component={Login} />
    </div>
  );
}

export default App;
