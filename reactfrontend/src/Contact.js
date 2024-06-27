import React from 'react';
import axios from 'axios';
import './Contact.css'; // Assuming this file contains additional styles
import Footer from './Footer';

// Importing the background image
import bgImage from './image/industry.jpg';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      // Save the form data to the backend
      await axios.post('/api/save_contact/', formData);
      
      // Send the form data to Formspree
      const response = await fetch('https://formspree.io/f/mblrrpye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('Submitted');
      } else {
        setFormStatus('Failed to send message via Formspree.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('Error');
    }
  };

  return (
    <>
    <div className="page-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-container">
        <div className="contact-form-box">
          <h2 className="headingform mb-3">Get in touch</h2>
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input className="form-control" type="text" id="name" required />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-control" type="email" id="email" required />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="form-control" id="message" required />
              </div>
            </div>
            <button className="btn btn-contact" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
