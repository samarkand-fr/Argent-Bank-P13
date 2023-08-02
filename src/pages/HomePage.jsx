import React from 'react';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';

/**
 * Homepage component representing the main content of the homepage.
 * It includes two child components: HeroSection and Features.
 * @returns {JSX.Element} - The rendered JSX element representing the homepage.
 */
const Homepage = () => {
  return (
    <>
      {/* display the hero section of the homepage */}
      <HeroSection />
      {/* display the features section of the homepage */}
      <Features />
    </>
  );
};

export default Homepage;
