import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "DataVision Studio",
      description:
        "An end-to-end data analytics web platform that collects and unifies data from multiple sources to provide real-time insights, predictive analytics, and AI-powered business intelligence.",
      image: null,
      technologies: [
        "Django",
        "Django REST Framework",
        "React",
        "Redux Toolkit",
        "MySQL",
        "Chart.js",
        "scikit-learn",
        "Prophet",
        "Docker",
        "AWS S3",
      ],
      category: "web",
      highlights: [
        "Designed and developed an end-to-end data analytics platform using Django (DRF), React, and MySQL",
        "Integrated RESTful APIs to collect data from multiple platforms including Shiphero, Sublytics, and Tiger Tech",
        "Built real-time analytics dashboards using React with Chart.js to replace manual reporting",
        "Implemented predictive models using scikit-learn and Prophet for inventory forecasting",
        "Developed AI-powered assistant using OpenAI API for business intelligence queries",
        "Created inventory management module with alert system and SKU tracking",
        "Deployed application using Docker containers on Contabo cloud infrastructure",
      ],
      links: {},
      challenges:
        "The main challenge was integrating data from disparate sources with different formats and structures, while ensuring real-time performance for analytics dashboards and maintaining data integrity across the platform.",
      detailedDescription: [
        {
          title: "Project Overview",
          content:
            "DataVision Studio is a modular data management and visualization platform designed to help businesses collect, analyze, and visualize data from multiple sources in a unified environment. The platform replaces manual reporting processes with automated, real-time dashboards and predictive analytics.",
          list: [
            "Unified data platform collecting from multiple business systems",
            "Real-time analytics dashboards for business intelligence",
            "Predictive modeling for inventory and sales forecasting",
            "AI-powered assistant for natural language business queries",
            "Inventory management with automated alerts and tracking",
          ],
        },
        {
          title: "Technical Implementation",
          content:
            "The application was built using a modern tech stack with a clear separation between backend and frontend:",
          list: [
            "Django backend with REST Framework for API development",
            "MySQL database for structured data storage",
            "React frontend with Redux Toolkit for state management",
            "Chart.js for interactive data visualization components",
            "scikit-learn and Prophet for predictive modeling",
            "OpenAI API integration for natural language processing",
            "Docker containers for consistent deployment",
            "AWS S3 for scalable media storage",
          ],
        },
        {
          title: "Key Features",
          content:
            "DataVision Studio includes several modules designed to address specific business needs:",
          list: [
            "Data Integration Hub: Collects and normalizes data from multiple platforms",
            "Analytics Dashboard: Provides real-time visualization of key business metrics",
            "Inventory Management: Tracks SKUs, stock levels, and reorder points",
            "Predictive Analytics: Forecasts stock levels and identifies potential stockouts",
            "AI Assistant: Answers business queries about performance and trends",
            "Report Generator: Creates customizable reports for different stakeholders",
            "Alert System: Notifies users of critical events and thresholds",
          ],
        },
        {
          title: "Architecture",
          content:
            "The platform follows a modular architecture with clear separation of concerns:",
          list: [
            "Modular Django apps managing different business logic domains",
            "RESTful API layer for communication between frontend and backend",
            "Redux store with RTK Query for efficient data fetching and caching",
            "Containerized deployment with Docker for scalability",
            "Environment-specific configurations via .env files",
            "Cloud-based storage for media and file handling",
          ],
        },
        {
          title: "Business Impact",
          content:
            "DataVision Studio has delivered significant value to the business:",
          list: [
            "Reduced reporting time from days to minutes with automated dashboards",
            "Improved inventory management with 15% reduction in stockouts",
            "Enhanced decision-making with AI-powered business intelligence",
            "Streamlined operations by unifying data from multiple platforms",
            "Enabled data-driven marketing strategies with performance analytics",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "AnxietyBuddy Mental Health App",
      description:
        "A cross-platform mental health app that helps users manage anxiety through various therapeutic techniques, mood tracking, and guided exercises.",
      image: "/project-images/anxiety_buddy_icon.png",
      technologies: [
        "React Native",
        "Firebase",
        "Firestore",
        "NoSQL",
        "Expo",
        "i18n",
      ],
      category: "mobile",
      highlights: [
        "Developed cross-platform app with React Native for consistent UX on iOS and Android",
        "Integrated Cloud Firestore NoSQL database with nested collections for real-time syncing",
        "Built multi-language support using i18n for global accessibility",
        "Secured 100,000 AED sponsorship from MUBADALA after pitching version 1.0",
      ],
      links: {
        github: "https://github.com/simonkb/My-Anxiety-Buddy",
      },
    },
    {
      id: 3,
      title: "Amnak",
      description:
        "A cross-platform mobile application designed for teaching cybersecurity concepts to different age groups, featuring an AI-integrated approach to boost awareness and learning.",
      image: "/project-images/amnak_icon.png",
      technologies: [
        "React Native",
        "JavaScript",
        "React.js",
        "AI Integration",
        "Mobile Development",
      ],
      category: "mobile",
      highlights: [
        "Designed and developed a cross-platform mobile app for teaching cybersecurity for different age groups",
        "Created admin dashboard using React and JavaScript to add content and control the entire app",
        "Worked as a research assistant, providing support to fellow students and teams in backend and frontend integration challenges",
        'Co-authored a research paper titled "Evaluating and Boosting Cybersecurity Awareness With an AI-Integrated Mobile App", accepted for 2024 IEEE Frontiers in Education Conference (FIE)',
      ],
      links: {
        github: "https://github.com/simonkb/Amnak",
        paper: "https://ieeexplore.ieee.org/document/10893003",
      },
    },
    {
      id: 4,
      title: "Contacts List",
      description:
        "A native Android contact management application built using C++, Java, QML, and CMake, offering a responsive and intuitive user interface for managing contact information.",
      image: null, // No image, will use text instead
      technologies: ["C++", "QML", "Java", "CMake", "Qt Framework", "Android"],
      category: "mobile",
      highlights: [
        "Developed a native Android contacts management application using C++ and QML",
        "Implemented data binding for synchronization between C++ backend and QML frontend",
        "Created responsive UI components with QML for seamless user experience",
        "Built with CMake for cross-platform compatibility",
      ],
      links: {
        github: "https://github.com/simonkb/ContactsList",
      },
    },
    {
      id: 5,
      title: "Smart Grid Energy Optimization",
      description:
        "Reinforcement learning models to optimize energy distribution in smart grids with renewable energy constraints and battery storage, minimizing electricity costs and CO2 emissions.",
      image: null,
      technologies: [
        "Python",
        "Reinforcement Learning",
        "WandB",
        "Pandas",
        "NumPy",
        "Jupyter",
      ],
      category: "ai",
      highlights: [
        "Developed reinforcement learning algorithms to control building energy storage systems",
        "Optimized battery usage with solar/wind energy integration to minimize grid electricity costs",
        "Implemented and compared multiple RL algorithms for energy management",
        "Used WandB for experiment tracking and hyperparameter optimization",
        "Reduced CO2 emissions through intelligent energy storage management",
      ],
      links: {
        github: "https://github.com/the-guti/ugrip-energy",
      },
      challenges:
        "The main challenge was creating accurate simulation environments that realistically model energy consumption patterns, renewable energy generation, and battery storage dynamics while developing RL algorithms that could effectively optimize across multiple competing objectives.",
      detailedDescription: [
        {
          title: "Project Overview",
          content:
            "This project focused on applying Reinforcement Learning to simulate and control a building's energy storage system. The goal was to achieve optimal control over energy storage (battery) and renewable energy systems, minimizing electricity costs and reducing CO2 emissions.",
          list: [
            "Energy storage optimization using reinforcement learning",
            "Integration of solar and wind energy generation data",
            "Cost minimization and emission reduction objectives",
            "Performance evaluation on test datasets",
          ],
        },
        {
          title: "Technical Implementation",
          content:
            "The project was implemented with a well-structured codebase organized into specialized components:",
          list: [
            "Algorithms directory containing various RL implementations",
            "Environment code simulating building energy storage systems",
            "Time series data for energy consumption and generation patterns",
            "YAML configuration files for environment settings and WandB sweeps",
            "Training scripts for different algorithms with hyperparameter optimization",
          ],
        },
        {
          title: "Research Methodology",
          content: "The research process involved several key steps:",
          list: [
            "Implementing and comparing multiple RL algorithms for energy management",
            "Using WandB for experiment tracking and hyperparameter optimization",
            "Evaluating algorithms on test datasets to measure cost savings",
            "Analyzing the impact of different control strategies on energy efficiency",
            "Quantifying percentage of money saved compared to baseline approaches",
          ],
        },
        {
          title: "Learning Outcomes",
          content: "This project provided valuable experience in:",
          list: [
            "Applying reinforcement learning to real-world optimization problems",
            "Working with time series data for energy consumption and generation",
            "Implementing and comparing different RL algorithms",
            "Using modern ML experiment tracking tools like WandB",
            "Developing solutions for sustainable energy management",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "SLAM Robotics",
      description:
        "Implementation of machine learning algorithms in autonomous robots, focusing on optimizing Simultaneous Localization and Mapping (SLAM) for embedded mobile platforms.",
      image: null,
      technologies: [
        "Python",
        "Deep Learning",
        "SLAM",
        "Computer Vision",
        "Robotics",
        "TensorFlow",
      ],
      category: "robotics",
      highlights: [
        "Implemented pruning optimization techniques for DROID-SLAM neural network models",
        "Reduced computational resources required for real-time 3D map reconstruction",
        "Optimized deep learning-based SLAM algorithms for embedded mobile platforms",
        "Evaluated performance in terms of speed and resource utilization",
      ],
      links: {},
      challenges:
        "The primary challenge was optimizing computationally intensive deep learning SLAM algorithms to run efficiently on resource-constrained embedded platforms in mobile robots, while maintaining sufficient accuracy for real-world navigation.",
      detailedDescription: [
        {
          title: "Project Overview",
          content:
            "This research project focused on implementing and optimizing machine learning algorithms for Simultaneous Localization and Mapping (SLAM) in autonomous robots. SLAM is a crucial technique that allows robots to create maps of unknown environments while simultaneously tracking their location, especially important in GPS-denied environments.",
          list: [
            "Deep learning-based SLAM implementation for autonomous navigation",
            "Optimization for resource-constrained embedded platforms",
            "Real-time 3D environment mapping and reconstruction",
            "Performance evaluation and benchmarking",
          ],
        },
        {
          title: "Technical Implementation",
          content:
            "The project involved working with DROID-SLAM neural network models and implementing pruning techniques to optimize performance:",
          list: [
            "Implementation of neural network pruning to reduce model size",
            "Optimization of inference speed for real-time processing",
            "Integration with embedded mobile robotics platforms",
            "Performance testing across various environmental conditions",
            "Comparative analysis with traditional SLAM approaches",
          ],
        },
        {
          title: "Research Significance",
          content:
            "Simultaneous Localization and Mapping (SLAM) is essential for autonomous robots operating in unknown environments without GPS. This research addressed the critical challenge of running computationally intensive deep learning SLAM algorithms on resource-limited embedded platforms:",
          list: [
            "Enabled real-time 3D mapping on mobile robots with limited computing power",
            "Improved efficiency while maintaining necessary accuracy for navigation",
            "Advanced the practical application of deep learning in robotics",
            "Contributed to making autonomous navigation more accessible for smaller robots",
          ],
        },
        {
          title: "Learning Outcomes",
          content: "This project provided valuable experience in:",
          list: [
            "Applying deep learning to robotics and autonomous navigation",
            "Implementing model optimization techniques for embedded systems",
            "Balancing computational efficiency with algorithmic accuracy",
            "Working with computer vision for environmental mapping",
            "Conducting systematic performance evaluation of AI systems",
          ],
        },
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI & ML" },
    { id: "robotics", name: "Robotics" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a collection of my recent projects. Each project reflects my
            passion for building innovative solutions and my technical
            expertise.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <FiFilter className="text-gray-600 dark:text-gray-400 mr-2" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${filter}-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 bg-white dark:bg-gray-800 rounded-t-lg overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-800/20 p-4">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 flex items-center justify-center p-2 shadow-lg mb-2">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-md flex items-center justify-center">
                        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                          {project.title
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400 text-center">
                      {project.title}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
