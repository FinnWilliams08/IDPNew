import React from 'react';
import { Footer } from '../components/Footer'; // Import the Footer component
import './AboutUs.css'; // Import the CSS file

export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to our company. We are dedicated to providing the best service possible.</p>
      {/* Other content */}
      
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};