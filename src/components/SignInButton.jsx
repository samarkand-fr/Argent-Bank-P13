import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignInButton = ({layout}) => {
  return (
    <NavLinkElements exact="true" to="/sign-in" layout={layout}>
      <Icon className="fa fa-user-circle" />
      <SignInTitle>Sign In</SignInTitle>
    </NavLinkElements>
  );
};

export default SignInButton;

const NavLinkElements = styled(NavLink)`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.layout === 'column' ? 'column' : 'row'};
`;


const Icon = styled.i`
font-size: 2rem;
padding: 0.5rem;
color: #2c3e50;
  @media (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

const SignInTitle = styled.h1`
  font-size: 1.4rem;
  padding: 0.5rem;
  color: #2c3e50;
`