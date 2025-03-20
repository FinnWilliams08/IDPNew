import React, { useState } from "react";
import { Footer } from '../components/Footer'; // Import the Footer component
import './Contact.css'; // Import the CSS file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // State variable for submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // Add logic to send form data to server or API
    setFormData({ name: "", email: "", message: "" }); // Reset the form
    setSubmitted(true); // Set submission status to true
  };

  return (
    <main className="contact-container">
      <h2>Contact Us</h2>
      <p>Reach out to us with any questions or inquiries about our products.</p>
      {submitted ? (
        <p className="thank-you-message">Thank you for your message, we will email you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <Footer /> {/* Add the Footer component */}
    </main>
  );
}
