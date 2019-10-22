import React, { useState } from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Journal from "./components/journals/Journal";
import { UserContext } from "./contexts/UserContext";
import Dashboard from "./components/journals/Dashboard";
import CreateJournal from "./components/journals/CreateJournal.js";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <Route
          path="/login"
          exact
          render={props => <Login {...props} setUser={setUser} />}
        />
        <Route
          path="/register"
          exact
          render={props => <Register {...props} setUser={setUser} />}
        />
        <PrivateRoute path="/" component={Dashboard} />
        <PrivateRoute path="/journal/:id" component={Journal} />
        <PrivateRoute path="/journal" component={CreateJournal} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
