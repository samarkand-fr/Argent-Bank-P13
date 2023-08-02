import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../slices/userSlice';
import styled from 'styled-components';

/**
 * Component that represents a button for signing out a user.
 * The button triggers the sign-out action and removes the token from local storage.
 * @returns {JSX.Element} - The rendered JSX element representing the logout button.
 */
const LogoutButton = () => {
  const dispatch = useDispatch();

  /**
   * Handles the sign-out process by removing the token from local storage and dispatching the logout action.
   */
  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(logOutUser());
  };

  return (
    <Button onClick={handleSignOut}>
      <Icon className="fa fa-sign-out" />
      <Paragraph>Sign Out</Paragraph>
    </Button>
  );
};

export default LogoutButton;

const Button = styled.button`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 2rem;
  padding: 0 0.5rem;
  margin-left: 1.5rem;
  color: #2c3e50;
  @media (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  display: inline;
  font-size: 1.1rem;
  color: #2c3e50;
  &:hover {
    color: #42b983;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;
