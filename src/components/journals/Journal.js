import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CreateExercise from "./CreateExercise.js";
import { UserContext } from "../../contexts/UserContext.js";

function Journal(props) {
  const [button, setButton] = useState(false);
  const { user } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`restricted/exercises/journal/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  console.log(props);

  return (
    <div>
      {button ? (
        <CreateExercise journal={props.match.params.id} user={user} />
      ) : (
        <button onClick={() => setButton(true)}>Create Exercise</button>
      )}
    </div>
  );
}
export default Journal;
