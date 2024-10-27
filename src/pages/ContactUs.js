import React from 'react';
import '../components/ContactUs.css'; // Import the CSS for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, comments, or suggestions, please feel free to contact us.</p>

        <div className="contact-info">
          <p>Email: <a href="mailto:medonations@gmail.com">medonations@gmail.com</a></p>
          <p>Phone: <a href="tel:+96176072936">+961 76 072 936</a></p>
          <p>Social media:
            <a href="https://www.instagram.com/medonations/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> medonations
            </a>
          </p>
          <p>We would love to hear from you and appreciate your feedback.</p>
          <p>We all can be changemakers, lifesavers, and hope creators!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

