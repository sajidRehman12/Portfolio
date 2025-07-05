import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sajid Ur Rehman</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineering Student & Full-Stack Developer
            </p>
            <p className="hero-description">
              Passionate about creating innovative solutions with expertise in full-stack development, 
              machine learning, and modern web technologies. Currently pursuing BS Software Engineering 
              at Punjab University College of Information Technology.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com/sajidRehman12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sajid-rehman-89b18a268/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:rehmansajid919@gmail.com" 
                className="social-link"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+923064705616" 
                className="social-link"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-circle">
              <div className="hero-avatar">
                <span className="avatar-text">SR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 