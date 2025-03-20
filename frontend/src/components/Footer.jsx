import React from 'react';
import './Footer.css'; // Import the CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Local Food Service. All rights reserved.</p>
        <p>Contact us: LocalFoods25@gamil.com | 📞 +44 7700 900123</p>
        <p>Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};