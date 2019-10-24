import React, { useState } from "react";
import Axios from "axios";

const CreateJournal = props => {
  console.log(props);
  const [workout, setWorkout] = useState({
    date: "",
    typeOfWorkout: ""
  });

  const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const workoutValues = {
      userId: props.match.params.id,
      date: workout.date,
      region: workout.typeOfWorkout,
    };

    Axios.post("restricted/journals/", workoutValues)
      .then(function(res) {
        props.history.push(`/dashboard`);
        console.log("Res:", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="NameWorkoutTop">
      <div className="NameWorkoutContainer">
        <div className="name-workout-card">
          <h2>Let's Journalize Those Gains!</h2>
          <div className="BottomOfCard">
            <form onSubmit={handleSubmit}>
              Date:
              <input
                className="date"
                type="date"
                name="date"
                value={workout.date}
                placeholder="mm/dd/yyyy"
                onChange={inputHandler}
              />
              <label>
                Select a Region:
                <select
                  className="typeOfWorkout"
                  name="typeOfWorkout"
                  value={workout.typeOfWorkout}
                  onChange={inputHandler}
                >
                  <option />
                  <option>Upper Body</option>
                  <option>Lower Body</option>
                  <option>Core</option>
                </select>
              </label>
              <button onSubmit={() => handleSubmit()}>BOOK IT!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateJournal;


