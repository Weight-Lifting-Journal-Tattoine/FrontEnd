import React, { useState, useEffect } from "react";
import Axios from "axios";
import CreateExercise from "./CreateExercise.js";

function Journal(props) {
  const [button, setButton] = useState(false);

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
        <CreateExercise journal={props.match.params.id} user={props.user} />
      ) : (
        <button onClick={() => setButton(true)}>Create Exercise</button>
      )}
    </div>
  );
}
export default Journal;
