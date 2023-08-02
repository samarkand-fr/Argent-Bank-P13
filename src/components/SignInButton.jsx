import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

/**
 * A reusable component that renders a "Sign In" button.
 * @param {string} layout - The layout direction for the button (either 'column' or 'row').
 */
const SignInButton = ({layout}) => {
  return (
    <NavLinkElements exact="true" to="/sign-in" layout={layout}>
      <Icon className="fa fa-user-circle" />
      <SignInTitle>Sign In</SignInTitle>
    </NavLinkElements>
  );
};

SignInButton.propTypes = {
  layout: PropTypes.oneOf(['column', 'row']).isRequired,
};

export default SignInButton;

/**
 * Styled NavLink element that represents the "Sign In" button.
 * @param {string} layout - The layout direction for the button (either 'column' or 'row').
 */
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