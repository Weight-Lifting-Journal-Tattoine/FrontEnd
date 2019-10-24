import React from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  Header,
  HeaderLeft,
  Metadata,
  DashboardLink,
  LogoutButton
} from "../styled/NavigationStyles.js";

const Navigation = ({ user, history }) => {
  const handleClick = () => {
    window.localStorage.clear();
    history.push("/login");
  };
  return (
    <Header>
      <HeaderLeft>
        <Logo>
          <span>Pro</span>
          <span>Lift</span>
        </Logo>
        <DashboardLink to="/dashboard">Dashboard</DashboardLink>
      </HeaderLeft>
      <Metadata>
        <p>
          Logged in as:
          <br />
          <span>
            {user.firstName} {user.lastName}
          </span>
        </p>
        <LogoutButton onClick={() => handleClick()}>Log Out</LogoutButton>
      </Metadata>
    </Header>
  );
};

export default Navigation;
