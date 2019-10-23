import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CreateExercise from "./CreateExercise.js";
import { UserContext } from "../../contexts/UserContext.js";

function Journal(props) {
  const [button, setButton] = useState(false);
  const { user } = useContext(UserContext);
  const [exercises, setExercises] = useState();

  console.log(user);

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`restricted/exercises/journal/${id}`)
      .then(res => {
        console.log(res);
        setExercises(res.data.exercises);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  console.log(props);

  return (
    <div>
      {exercises &&
        exercises.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>
                Sets: <span></span>
                {item.sets}
              </p>
              <p>
                Reps: <span></span>
                {item.reps}
              </p>
              <p>
                Weight: <span></span>
                {item.weight}
              </p>
            </div>
          );
        })}
      {button ? (
        <CreateExercise
          journal={props.match.params.id}
          user={user}
          setExercises={setExercises}
          exercises={exercises}
          setButton={setButton}
        />
      ) : (
        <button onClick={() => setButton(true)}>Create Exercise</button>
      )}
    </div>
  );
}
export default Journal;
