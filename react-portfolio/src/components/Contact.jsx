import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here, you could also add an API call to send the data to your backend or an email service
    alert('Message submitted successfully!');
    // Clear the form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Let's Connect and create together</p>
      <div className='social-icons'>
            <a href="https://github.com/Naima432" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/hajjineimo123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:hajjineimo@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope size={40} />
            </a>
          </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name" className='name'>Name:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className='email'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className='subject'>Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          
          <label htmlFor="message" className='msg'>Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='btn'>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
