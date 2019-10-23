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
          path="/"
          exact
          render={props => <Register {...props} setUser={setUser} />}
        />
<<<<<<< HEAD
<<<<<<< HEAD:weightlifting_journal/src/App.js
        

        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        <Route path="/journal/:id" render={props => <Journal {...props} />} />
        <Route path="/journals" render={props => <CreateJournal {...props} />} />

=======
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/journal/:id" component={Journal} />
        <PrivateRoute path="/journal" component={CreateJournal} />
>>>>>>> 96c0b900b4ac061e43a2f8d8c72e4bd841fcb146:src/App.js
=======

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/journal/:id" component={Journal} />
        <PrivateRoute exact path="/journal" component={CreateJournal} />

        <Route
          path="/newjournal/:id"
          render={props => <CreateJournal {...props} user={user} />}
        />
<<<<<<< HEAD

>>>>>>> 34ccbabd3520715b4b5991163e7d6d2deecebfec
=======
>>>>>>> 24c7d113bf0f3c91b6b86ea9f63fba1dea6da26b
      </div>
    </UserContext.Provider>
  );
}

export default App;
