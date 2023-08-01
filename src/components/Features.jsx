import React from 'react'
// datas imports
import features from '../datas/features'
import Feature from './FeatureItem'
import styled from "styled-components";

const Features = () => {
  return (
    <FeaturesStyle>
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          content={feature.content}
        />
      ))}
    </FeaturesStyle>
  )
}


export default Features

export const FeaturesStyle = styled.section`
  display: flex;
  flex-direction: row;
  padding-bottom: 3.5rem;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    padding-bottom: 5.5rem;
  }
`
