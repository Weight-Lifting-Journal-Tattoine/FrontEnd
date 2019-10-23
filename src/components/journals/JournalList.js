import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import JournalCard from "./JournalCard";

function JournalList(props) {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    Axios.get("/restricted/exercises")
      .then(res => setExercises(res.data.exercises))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {props.journals.map((journal, index) => {
        const journalExercises = exercises.filter(exercise => {
          return exercise.journalId === 1;
        });
        return (
          <Link to={`/journal/${journal.id}`} key={index}>
            <JournalCard
              journal={journal}
              journalExercises={journalExercises}
            />
          </Link>
        );
      })}
    </div>
  );
}
export default JournalList;
