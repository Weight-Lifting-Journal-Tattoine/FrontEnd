import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Axios from "axios";
import JournalList from "./JournalList";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {
  Container,
  Header,
  Logo,
  Name,
  UserName
} from "../../styled/DashStyles";

function Dashboard(props) {
  const [journals, setJournals] = useState([]);
  const { user } = useContext(UserContext);

  const upper = journals.filter(item => {
    return item.region === "Upper Body";
  });
  const lower = journals.filter(item => {
    return item.region === "Lower Body";
  });
  const core = journals.filter(item => {
    return item.region === "Core";
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

  return (
    <Container>
      <Header>
        <Logo>
          <span>Pro</span>
          <span>Lift</span>
        </Logo>
        <Name>
          {user.firstName} {user.lastName}
        </Name>
      </Header>
      <UserName>{user.username}</UserName>
      <div>
        <span>Journals logged: {journals.length}</span>
        <h4>Journals by Body Region</h4>
        <span>
          Upper Body: {upper.length} Lower Body: {lower.length} Core:
          {core.length}
        </span>
      </div>
      <Link to={`/newjournal/${user.id}`}>
        <ButtonStyle>Create New Journal</ButtonStyle>
      </Link>
      <div>
        <JournalList journals={journals} />
      </div>
    </Container>
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


/***********Styles**********/
const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 80px;
  background: #991c27;
  margin-top: 20px;
  margin-left: 0%;
  width:40%;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 1.1rem;
  transition: 1s;
`