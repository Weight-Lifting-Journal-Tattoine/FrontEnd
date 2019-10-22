import React, { useEffect, useState } from "react";
import Axios from "axios";

function Journal(props) {
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`restricted/exercises/journal/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [props.match.params.id]);
  console.log(props);
  return (
    <div>
      <button>Create Exercise</button>
    </div>
  );
}
export default Journal;
