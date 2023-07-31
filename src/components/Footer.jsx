
import React from 'react'
import styled from 'styled-components'


const Footer = () => {

  return (
    <FooterStyle >
      <FooterLine /> 
      <Copyright >Copyright 2020 Argent Bank</Copyright>
    </FooterStyle>
  )
}

export default Footer


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
`

const Copyright = styled.p`
  color:#2c3e50;
`

const FooterLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 2px solid #bfc8d3;
`