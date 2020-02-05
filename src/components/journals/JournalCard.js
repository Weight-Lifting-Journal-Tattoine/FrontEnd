import React from "react";
import styled from "styled-components";
import { Card } from 'semantic-ui-react';

function JournalCard(props) {
  const { updated_at, region } = props.journal;
  const date = updated_at.split(" ");

  return (
    <Container>
    <Card>
      <Exercise>
        <RegionStyled>{region}</RegionStyled>
        <StyledData>Date Created: {date[0]}</StyledData>
        <StyledData>Exercises: {props.journalExercises.length} </StyledData>
      </Exercise>
    </Card>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
