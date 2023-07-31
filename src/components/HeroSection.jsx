
import React from 'react'

import styled from 'styled-components'
import image from '../assets/img/bank-tree.jpeg'

const Hero = () => {

  return (
    <HeroStyle>
      <HeroContent >
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle >No fees.</Subtitle>
        <Subtitle >No minimum deposit.</Subtitle>
        <Subtitle >High interest rates.</Subtitle>
        <Text >Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </HeroStyle>
  )
}


export default Hero


const HeroStyle = styled.header`
  background-image: url(${image});
  background-position: 0 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
  position: relative;
  @media (max-width: 500px) {
    height: 16rem;
  }
`
const HeroContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 18.25rem;
  background:white;
  padding: 2rem;
  text-align: left;
  margin: 2rem;
  border-radius: 0.35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px) {
    width: 16rem;
    padding: 1rem;
    margin: auto;
    right: 0;
    left: 0;
  }
`
const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  color: #2c3e50;
  display: inline-block; 
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`
const Text = styled.p`
  margin:0;
  margin-bottom: 0;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  color: #2c3e50;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
