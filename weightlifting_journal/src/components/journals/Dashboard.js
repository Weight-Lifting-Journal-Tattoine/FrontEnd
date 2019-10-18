import React, {useEffect, useState} from 'react'
import Axios from 'axios';


function Dashboard () {
    const [journals, setJournals] = useState([])
    useEffect(() => {
        Axios.get('restricted/journals')
        .then(res => {
            setJournals(res.data.journals.filter((item) => {
                return item.userId === user.id;
            }))
        })
        .catch(err => console.log(err))
        
    }, [])
    console.log(journals)

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <h3>{user.username}</h3>
            <span>Journals logged: {journals.length}</span>
            <div>
               <h4>Journals by Body Region</h4>
               <span></span>
            </div>
        </div>
    )
}

export default Dashboard;

const user = {
    created_at: "2019-06-23",
    email: "admin.gmail.com",
    id: 1,
    lastName: "admin",
    firstName: "admin",
    username: "admin"
}