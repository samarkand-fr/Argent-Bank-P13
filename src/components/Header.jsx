import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import SignInButton from './SignInButton';
import LogoutButton from './LogoutButton';

/**
 * Header component displaying the Argent Bank logo and navigation links.
 * If the user is logged in, it displays the user's name and a logout button.
 * If the user is not logged in, it displays a sign-in button.
 * @returns {JSX.Element} - The rendered JSX element representing the header.
 */
const Header = () => {
  const selectLogin = (state) => state.getUser.isLogged;
  const login = useSelector(selectLogin);

  const selectUser = (state) => state.getUser.user;
  const user = useSelector(selectUser);

  return (
    <HeaderStyle>
      <NavWrapper>
         {/* Argent Bank Logo */}
        <NavLink exact="true" to="/">
          <h1 className="sr-only">Argent Bank</h1> 
          <Logo src={logo} alt="Argent Bank Logo" />
        </NavLink>
        {!login ? (
            // Display SignInButton component if not logged in
          <NavLinksWrapper>
            <SignInButton layout="row" />
          </NavLinksWrapper>
        ) : (
           // Display User Name and LogoutButton component if logged in
          <NavLinksWrapper>
            <NavLink exact="true" to="/user">
              <Icon className="fa fa-user-circle" />
              <Paragraph>{user.body.firstName}</Paragraph>
            </NavLink>
            <LogoutButton /> 
          </NavLinksWrapper>
        )}
      </NavWrapper>
    </HeaderStyle>
  );
};



export default Header;


const HeaderStyle = styled.header`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  padding-bottom:0;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 1.25rem;
  background-color:white;
  @media (max-width: 520px) {
    padding: 0.35rem 0.5rem;
  }
`;


const Icon = styled.i`
  font-size: 2rem;
  padding: 0 0.5rem;
  margin-left: 1.5rem;
  color: #2c3e50 ;
  @media (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

const Logo = styled.img`
  width: 12.5rem;
  border-radius: 0.35rem;
  padding-top: 0.2rem;
  @media (max-width: 520px) {
    width: 10.5rem;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  display: inline;
  font-size: 1.1rem;
  color:#2c3e50;
  &:hover {
    color: #42b983;
  }
  @media (max-width: 520px) {
    display: none;
  }
`
