import React, { useState } from "react";
import Axios from "axios";


const CreateJournal = props => {
    const[workout, setWorkout] = useState({
        date: "",
        typeOfWorkout: ""
    })

const inputHandler = e => {
    setWorkout({ ...workout, [e.target.name]: e.target.value})
}

const handleSubmit = event => {
    event.preventDefault()
    const workoutValues = {
        date: workout.date,
        region: workout.typeOfWorkout,
        userId: localStorage.id
    }

    Axios.post("restricted/journals/", workoutValues)
        .then(function (res) {
            // props.history.push(`/journallist/${userId}`);
            console.log("Res:", res)
        })
        .catch()
      }

return (
    <div className = "NameWorkoutTop">
        <div className ="NameWorkoutContainer">
            <div className="name-workout-card">
                <h2>Lets Journalize Those Gains Bro</h2>
                <div className="BottomOfCard">
                    <form onSubmit={handleSubmit} >
                        Date: 
                        <input 
                            className="date"
                            type="text"
                            name="date"
                            value={workout.date}
                            placeholder="mm/dd/yy"
                            onChange={inputHandler}
                        />
                      
                        <label>
                            Choose Your Gains: 
                            <select className="typeOfWorkout"
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

                        <button onSubmit={() =>handleSubmit()}>JUST, DO IT!</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}
export default CreateJournal