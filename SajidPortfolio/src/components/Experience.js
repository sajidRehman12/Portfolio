import React from 'react';
import { FaChalkboardTeacher, FaTrophy, FaCode, FaUsers } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Teaching Assistant - Object Oriented Programming (OOP)',
      company: 'Punjab University College of Information Technology',
      duration: '5th Semester, 2024',
      type: 'Academic',
      icon: <FaChalkboardTeacher />,
      responsibilities: [
        'Conducted OOP labs for undergraduate students',
        'Assisted students with coding exercises and problem-solving techniques',
        'Provided guidance on object-oriented programming concepts',
        'Helped students debug code and understand complex programming patterns',
        'Mentored students in best practices for software development'
      ],
      skills: ['C++', 'OOP Concepts', 'Teaching', 'Mentoring', 'Problem Solving']
    }
  ];

  const activities = [
    {
      title: 'Sports Society - Production Team Member',
      organization: 'Punjab University College of Information Technology',
      duration: 'Ongoing',
      icon: <FaTrophy />,
      description: 'Active member of the Production Team in the Sports Society, contributing to the planning and execution of various sports events and activities.',
      responsibilities: [
        'Event planning and coordination',
        'Team collaboration and communication',
        'Project management for sports events',
        'Logistics and organizational support'
      ],
      skills: ['Event Management', 'Team Leadership', 'Project Coordination', 'Communication']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Activities</h2>
        
        <div className="experience-content">
          <div className="experience-section">
            <h3><FaCode /> Professional Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-icon">{exp.icon}</div>
                  <div className="experience-content-item">
                    <div className="experience-header">
                      <h4>{exp.title}</h4>
                      <span className="experience-duration">{exp.duration}</span>
                    </div>
                    <p className="experience-company">{exp.company}</p>
                    <ul className="experience-responsibilities">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="experience-skills">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="activities-section">
            <h3><FaUsers /> Extra-Curricular Activities</h3>
            <div className="activities-list">
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <div className="activity-header">
                      <h4>{activity.title}</h4>
                      <span className="activity-duration">{activity.duration}</span>
                    </div>
                    <p className="activity-organization">{activity.organization}</p>
                    <p className="activity-description">{activity.description}</p>
                    <ul className="activity-responsibilities">
                      {activity.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="activity-skills">
                      {activity.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 