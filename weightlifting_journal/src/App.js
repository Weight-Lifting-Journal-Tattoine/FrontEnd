import React, { useState } from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
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


          <Route path="/dashboard" component={Dashboard} />
          <Route path="/journal" component={CreateJournal} />

      </div>
    </UserContext.Provider>
  );
}

export default App;
