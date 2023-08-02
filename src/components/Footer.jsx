import React from 'react';
import styled from 'styled-components';

/**
 * Footer component representing the bottom section of the website.
 * @returns {JSX.Element} - The rendered JSX element representing the footer.
 */
const Footer = () => {
  return (
    <FooterStyle>
      {/* Display a line separator at the top of the footer */}
      <FooterLine />

      {/* Display the copyright text */}
      <Copyright>Copyright 2020 Argent Bank</Copyright>
    </FooterStyle>
  );
};

export default Footer;

// Styled components 
const FooterStyle = styled.footer`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  position: fixed; /* Fix the footer to the bottom */
  bottom: 0; /* Position the footer at the bottom of the viewport */
  width: 100%; /* Make the footer span the full width of the viewport */
`;

const Copyright = styled.p`
  color: #2c3e50;
`;

const FooterLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid #bfc8d3;
`;
