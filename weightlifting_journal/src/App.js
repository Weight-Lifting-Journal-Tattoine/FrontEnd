import React, { useState } from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import { UserContext } from "./contexts/UserContext";
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
      </div>
    </UserContext.Provider>
  );
}

export default App;
