
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Component representing an individual feature item.
 * @param {Object} props - Props containing icon, alt, title, and content of the feature.
 * @returns {JSX.Element} - The rendered JSX element representing the feature item.
 */
const FeatureItem = ({ icon, alt, title, content }) => {

  return (
    <FeatureItemStyle>
      <FeatureImage  src={icon} alt={alt} />{/* Display the feature icon */}
      <FeatureTitle >{title}</FeatureTitle> {/* Display the feature title */}
      <FeatureText >{content}</FeatureText> {/* Display the feature content */}
    </FeatureItemStyle>
  )
}

// Prop types 
FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default FeatureItem

// Styled components
const FeatureItemStyle = styled.article`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
  @media (max-width: 520px) {
    padding: 2rem 1.3rem 0 1.3rem;
  }

`
const FeatureImage = styled.img`
  width: 8rem;
  border: 0.5rem solid #42b983;
  border-radius: 50%;
  padding: 1rem;
  background-color: white;
`
const FeatureTitle = styled.h3`
  color: #2c3e50 ;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  padding-top: 0.5rem;
`
const FeatureText = styled.p`
  text-align: center;
  color:#2c3e50;
`
