import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with an email service like EmailJS here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'rehmansajid919@gmail.com',
      link: 'mailto:rehmansajid919@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+92 306 4705616',
      link: 'tel:+923064705616'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: 'https://maps.google.com/?q=Lahore,Pakistan'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Sajid Rehman',
      link: 'https://www.linkedin.com/in/sajid-rehman-89b18a268/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'sajidRehman12',
      link: 'https://github.com/sajidRehman12'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and software development. 
                Feel free to reach out!
              </p>
            </div>
            
            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-availability">
              <h4>Availability</h4>
              <p>Available for:</p>
              <ul>
                <li>Full-time positions</li>
                <li>Internship opportunities</li>
                <li>Freelance projects</li>
                <li>Open source contributions</li>
                <li>Technical discussions</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaComment className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaComment className="input-icon message-icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn submit-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 