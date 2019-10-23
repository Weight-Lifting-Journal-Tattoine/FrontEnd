import React from "react";

function JournalCard(props) {
  const { updated_at, id, region } = props.journal;
  const date = updated_at.split(" ");

  return (
    <div>
      <h3>{region}</h3>
      <span>Date Updated: {date[0]}</span>
      <span>Current Exercises: {props.journalExercises.length} </span>
    </div>
  );
}
export default JournalCard;
