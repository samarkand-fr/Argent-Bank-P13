import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/**
 * Component representing the "Not Found" page.
 * This page is shown when a user tries to access a route that doesn't exist.
 * @returns {JSX.Element} - The rendered JSX element representing the "Not Found" page.
 */
const NotFound = () => {
  return (
    <div>
      <CenterPage>
        {/* Title of the "Not Found" page */}
        <Title>Error404</Title>
        {/* Text explaining that the requested page doesn't exist */}
        <TitleText>Oups! La page que vous demandez n'existe pas.</TitleText>
        {/* Link to return to the homepage */}
        <TitleReturn to="/">Retourner sur la page d’accueil</TitleReturn>
      </CenterPage>
    </div>
  );
};

export default NotFound;

/**
 * Styled component representing the centering of the page content.
 */
export const CenterPage = styled.div`
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-top: 200px;
  }
`;

/**
 * Styled component representing the title of the "Not Found" page.
 */
const Title = styled.h1`
  color: #00bc77;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 10rem;
  margin-top: 66px;
  @media screen and (max-width: 750px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 5rem;
  }
`;

/**
 * Styled component representing the text explaining that the requested page doesn't exist.
 */
const TitleText = styled.p`
  color: #00bc77;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 66px;
  margin-bottom: 60px;
  @media screen and (max-width: 750px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

/**
 * Styled component representing the link to return to the homepage.
 * It is a styled NavLink component that renders as an underlined link.
 */
const TitleReturn = styled(NavLink)`
  color: rgba(255, 1, 1, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 1.12rem;
  font-weight: 500;
  padding-bottom: 80px;
  text-decoration: underline;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;
