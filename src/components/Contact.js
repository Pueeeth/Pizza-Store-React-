import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We would love to hear from you! Get in touch with us via the following channels:</p>
      <div className="contact-info">
        <p>Email: ourpizzastore@gmail.com</p>
        <p>Phone: +91-9876543212</p>
      </div>
    </div>
  );
}

export default Contact;