import React from "react";
import styled from "styled-components";
import Axios from "axios";

function JournalCard(props) {
  const { updated_at, region, id } = props.journal;
  const { journals, setJournals } = props;
  const date = updated_at.split(" ");

  const handleClick = e => {
    e.preventDefault();
    Axios.delete(`/restricted/journals/${id}`).then(res => {
      const newJournals = journals.filter(journal => {
        return journal.id != id;
      });
      console.log(newJournals);
      setJournals(newJournals);
    });
  };

  return (
    <Container>
      <Exercise>
        <RegionStyled>{region}</RegionStyled>
        <StyledData>Date Created: {date[0]}</StyledData>
        <StyledData>Exercises: {props.journalExercises.length} </StyledData>
        <button onClick={e => handleClick(e)}>Delete</button>
      </Exercise>
    </Container>
  );
}
export default JournalCard;

/**************Styles************/
const RegionStyled = styled.div`
  color: #252627;
  font-size: 2rem;
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Alfa Slab One", cursive;
  width: 100%;

  padding-left: 20px;
  span:first-child {
    color: #991c27;
  }
`;
const StyledData = styled.div`
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Alfa Slab One", cursive;
  font-size: 1rem;
  color: #991c27;
  text-align: center;
`;
const Exercise = styled.div`
  color: #252627;
  font-size: 1rem;
  font-family: "Alfa Slab One", cursive;
  text-shadow: #ffffff 1px 1px 0;
  padding: 10px 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
