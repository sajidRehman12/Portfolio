import React from 'react';
import { FaCode, FaDatabase, FaReact, FaPython, FaJs, FaGitAlt, FaDocker, FaUsers, FaClock, FaUserTie } from 'react-icons/fa';
import { SiCsharp, SiKotlin, SiDotnet, SiMongodb, SiNodedotjs, SiSignalr, SiPytorch, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'C++', level: 85 },
        { name: 'C#', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Kotlin', level: 75 }
      ]
    },
    {
      category: 'Web Technologies',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.js', level: 75 },
        { name: 'ASP.NET MVC', level: 85 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Entity Framework', level: 85 }
      ]
    },
    {
      category: 'Frameworks & Tools',
      icon: <FaGitAlt />,
      skills: [
        { name: '.NET Framework', level: 90 },
        { name: 'ADO.NET', level: 85 },
        { name: 'SignalR', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'Git', level: 80 }
      ]
    },
    {
      category: 'Machine Learning',
      icon: <FaPython />,
      skills: [
        { name: 'PyTorch', level: 75 },
        { name: 'Neural Networks', level: 80 },
        { name: 'MTCNN', level: 70 },
        { name: 'FaceNet', level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Leadership',
      icon: <FaUserTie />,
      description: 'Experienced in guiding classmates and team members in various projects'
    },
    {
      name: 'Problem Solving',
      icon: <FaCode />,
      description: 'Strong analytical thinking and ability to break down complex problems'
    },
    {
      name: 'Team Collaboration',
      icon: <FaUsers />,
      description: 'Excellent communication and teamwork skills in diverse environments'
    },
    {
      name: 'Time Management',
      icon: <FaClock />,
      description: 'Punctual and responsible with strong project management capabilities'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((category, index) => (
                <div key={index} className="skill-category">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h4>{category.category}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <div className="soft-skill-content">
                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
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

export default Skills; 