import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Passionate Software Engineering Student</h3>
              <p>
                I am a motivated and detail-oriented undergraduate Software Engineering student with a solid foundation in full-stack web development. My journey in technology is driven by curiosity and a genuine passion for solving complex problems through innovative solutions.
              </p>
              <p>
                With hands-on experience in ADO.NET, C#, .NET technologies, and modern web frameworks, I have developed a strong aptitude for creating scalable applications. I'm particularly drawn to the intersection of web development and machine learning, where I see immense potential for creating intelligent, user-centric applications.
              </p>
              <p>
                My goal is to contribute to innovative software development teams while continuously expanding my knowledge and skills, especially in emerging technologies like artificial intelligence and machine learning.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <FaCode className="highlight-icon" />
                <div>
                  <h4>Full-Stack Development</h4>
                  <p>Proficient in both frontend and backend technologies</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaBrain className="highlight-icon" />
                <div>
                  <h4>Machine Learning</h4>
                  <p>Experienced in neural networks and AI implementations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card">
              <FaGraduationCap className="info-icon" />
              <h3>Education</h3>
              <div className="education-item">
                <h4>BS Software Engineering</h4>
                <p className="institution">Punjab University College of Information Technology</p>
                <p className="duration">Expected 2026</p>
                <p className="cgpa">CGPA: 3.4 (till 5th semester)</p>
              </div>
              <div className="coursework">
                <h5>Relevant Coursework:</h5>
                <ul>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Mobile App Development</li>
                  <li>Database Systems</li>
                  <li>Software Architecture</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
              <p>Available for remote work and collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 