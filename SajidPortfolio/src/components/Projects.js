import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaDesktop, FaBrain, FaShoppingCart, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ShopSphere - E-commerce Platform',
      category: 'fullstack',
      type: 'MERN Stack',
      image: '/api/placeholder/400/250',
      description: 'A comprehensive e-commerce platform built with the MERN stack, featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Redux'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin panel for inventory management',
        'Real-time order tracking',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/sajidRehman12/shopsphere',
      demo: 'https://shopsphere-demo.vercel.app',
      icon: <FaShoppingCart />
    },
    {
      id: 2,
      title: 'FaceGuard - Face Recognition System',
      category: 'ai',
      type: 'Machine Learning',
      image: '/api/placeholder/400/250',
      description: 'Advanced face recognition system using MTCNN for face detection and FaceNet for face recognition, with real-time processing capabilities and high accuracy rates.',
      technologies: ['Python', 'OpenCV', 'MTCNN', 'FaceNet', 'TensorFlow', 'NumPy', 'PIL'],
      features: [
        'Real-time face detection using MTCNN',
        'Face recognition with FaceNet embeddings',
        'Multiple face tracking in video streams',
        'Database integration for known faces',
        'Confidence scoring and threshold adjustment',
        'Video and image processing capabilities',
        'Web interface for system management'
      ],
      github: 'https://github.com/sajidRehman12/faceguard',
      demo: 'https://faceguard-demo.herokuapp.com',
      icon: <FaEye />
    },
    {
      id: 3,
      title: 'House Repair - Service Booking Platform',
      category: 'web',
      type: 'Web Application',
      image: '/api/placeholder/400/250',
      description: 'A comprehensive web application for booking home repair services including plumbing, electrical, carpentry, and more with real-time status updates.',
      technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'jQuery', 'AJAX'],
      features: [
        'Service booking and scheduling system',
        'Real-time appointment status updates',
        'Service provider dashboard',
        'Customer review and rating system',
        'Payment integration',
        'Admin panel for service management',
        'Responsive design with Bootstrap'
      ],
      github: 'https://github.com/sajidRehman12/house-repair',
      demo: 'https://house-repair-demo.azurewebsites.net',
      icon: <FaDesktop />
    },
    {
      id: 4,
      title: 'Taskify - Task Management App',
      category: 'mobile',
      type: 'Mobile Application',
      image: '/api/placeholder/400/250',
      description: 'A clean and intuitive Android to-do list app for managing daily tasks with priority settings, reminders, and offline storage capabilities.',
      technologies: ['Kotlin', 'XML', 'Room Database', 'RecyclerView', 'Material Design'],
      features: [
        'Task creation, editing, and deletion',
        'Priority levels and due dates',
        'Swipe-to-complete functionality',
        'Offline storage with Room Database',
        'Material Design UI components',
        'Search and filter capabilities',
        'Dark mode support'
      ],
      github: 'https://github.com/sajidRehman12/taskify',
      demo: 'https://play.google.com/store/apps/details?id=com.taskify',
      icon: <FaMobile />
    },
    {
      id: 5,
      title: 'Binary Classification Neural Network',
      category: 'ai',
      type: 'Machine Learning',
      image: '/api/placeholder/400/250',
      description: 'A neural network implementation for binary classification problems using forward and backward propagation with PyTorch framework.',
      technologies: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Pandas', 'Scikit-learn'],
      features: [
        'Custom neural network architecture',
        'Forward and backward propagation',
        'Multiple activation functions',
        'Gradient descent optimization',
        'Data preprocessing and visualization',
        'Model evaluation metrics',
        'Hyperparameter tuning'
      ],
      github: 'https://github.com/sajidRehman12/binary-classification-nn',
      demo: 'https://colab.research.google.com/drive/binary-classification',
      icon: <FaBrain />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 