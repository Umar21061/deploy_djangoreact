import React from 'react';
import axios from 'axios';
import './Contact.css';

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
      const response = await axios.post('/api/save_contact/', formData);
      console.log(response.data); // Assuming the backend returns some confirmation
      setFormStatus('Submitted');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('Error');
    }
  };

  return (
    <div className="contact-container mt-5">
      <h2 className="mb-3">Get in touch</h2>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-6 mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="col-6 mb-3">
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
  );
};

export default ContactForm;
