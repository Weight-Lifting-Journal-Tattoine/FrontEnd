import React from "react";
import {
  Logo,
  Header,
  HeaderLeft,
  Metadata,
  DashboardLink,
  LogoutButton
} from "../styled/NavigationStyles.js";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navigation = ({ user, setLoggedIn }) => {
  const history = useHistory();
  const handleClick = () => {
    window.localStorage.clear();
    setLoggedIn(false);
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
