import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Axios from "axios";

function Dashboard() {
  const [journals, setJournals] = useState([]);
  const { user } = useContext(UserContext);

  const upper = journals.filter(item => {
    return item.region === "Chest";
  });
  const lower = journals.filter(item => {
    return item.region === "Legs";
  });
  const core = journals.filter(item => {
    return item.region === "Abs";
  });

  useEffect(() => {
    Axios.get("restricted/journals")
      .then(res => {
        setJournals(
          res.data.journals.filter(item => {
            return item.userId === user.id;
          })
        );
      })
      .catch(err => console.log(err));
  }, [user]);
  console.log(user);

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <h3>{user.username}</h3>
      <span>Journals logged: {journals.length}</span>
      <div>
        <h4>Journals by Body Region</h4>
        <span>
          Upper Body: {upper.length} Lower Body: {lower.length} Core:{" "}
          {core.length}
        </span>
      </div>
      <button>Journals List</button>
      <button>Create New Journal</button>
    </div>
  );
}

export default Dashboard;

// const user = {
//   created_at: "2019-06-23",
//   email: "admin.gmail.com",
//   id: 1,
//   lastName: "admin",
//   firstName: "admin",
//   username: "admin"
// };
