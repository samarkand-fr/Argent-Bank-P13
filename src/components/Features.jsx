import React from 'react'
// datas imports
import features from '../datas/features';//An array of feature objects
import Feature from './FeatureItem';//A component to display each feature item
import styled from "styled-components";

/**
 * Features component displaying a list of features.
 * Each feature is rendered using the Feature component.
 * @returns {JSX.Element} - The rendered JSX element representing the features section.
 */
const Features = () => {
  return (
    <FeaturesStyle>
      <h2 className="sr-only">Features</h2> {/* A visually hidden heading for accessibility */}
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

// Styled components 

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
