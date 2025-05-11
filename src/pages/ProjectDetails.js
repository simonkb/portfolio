import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectDetail from "../components/projects/ProjectDetail";
import PdfViewer from "../components/projects/PdfViewer";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = () => {
      const projects = [
        {
          id: 1,
          title: "DataVision Studio",
          description:
            "An end-to-end data analytics web platform that collects and unifies data from multiple sources to provide real-time insights, predictive analytics, and AI-powered business intelligence.",
          image: "/project-images/screenshots/dvs1.png",
          screenshots: [
            { src: "/project-images/screenshots/dvs1.png", alt: "DataVision Studio Dashboard" },
            { src: "/project-images/screenshots/dvs2.png", alt: "Real-time Analytics View" },
            { src: "/project-images/screenshots/dvs3.png", alt: "Inventory Management Module" },
            { src: "/project-images/screenshots/dvs4.png", alt: "Predictive Analytics Dashboard" },
            { src: "/project-images/screenshots/dvs5.png", alt: "Data Integration Hub" },
            { src: "/project-images/screenshots/dvs6.png", alt: "Report Generator" },
            { src: "/project-images/screenshots/dvs7.png", alt: "AI Assistant Interface" },
            { src: "/project-images/screenshots/dvs8.png", alt: "User Management Panel" },
            { src: "/project-images/screenshots/dvs9.png", alt: "System Configuration" },
            { src: "/project-images/screenshots/dvs10.png", alt: "Data Source Connections" },
            { src: "/project-images/screenshots/dvs11.png", alt: "Alert System Configuration" },
            { src: "/project-images/screenshots/dvs12.png", alt: "Performance Metrics View" },
            { src: "/project-images/screenshots/dvs13.png", alt: "Mobile Responsive View" }
          ],
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
            "AnxietyBuddy is a comprehensive mental health mobile application designed to assist individuals in managing anxiety through real-time feedback, therapeutic exercises, and self-monitoring tools. Developed through collaboration between IT and medical professionals, the app combines evidence-based psychological interventions with modern technologies.",
          image: "/project-images/anxiety_buddy_icon.png",
          technologies: [
            "React Native",
            "Firebase",
            "Firestore",
            "NoSQL",
            "Expo",
            "i18n",
            "Node.js",
            "REST API",
          ],
          category: "mobile",
          highlights: [
            "Developed cross-platform app with React Native for consistent UX on iOS and Android",
            "Integrated Cloud Firestore NoSQL database with nested collections for real-time syncing",
            "Built multi-language support using i18n for global accessibility",
            "Implemented wearable integration for heart rate monitoring and anxiety assessment",
            "Created interactive CBT exercises and guided breathing sessions",
            "Designed secure data storage with encryption and user authentication",
            "Secured 100,000 AED sponsorship from MUBADALA after pitching version 1.0",
          ],
          links: {
            github: "https://github.com/simonkb/My-Anxiety-Buddy",
          },
          challenges:
            "Key challenges included implementing multilingual support with Arabic RTL interface design, ensuring data integrity with variable heart rate sensors, and working within budget limitations that inhibited full integration of advanced features like Virtual Reality for exposure therapy.",
          pdfPoster: "/AnxietyBuddy.pdf",
          detailedDescription: [
            {
              title: "Technical Stack",
              content:
                "The frontend was developed using React Native with Material UI and native components for cross-platform compatibility on both Android and iOS. The backend leverages Node.js with custom REST APIs for user authentication, mood tracking, journal entries, and analytics.",
              list: [
                "Frontend: React Native, Material UI, native components",
                "Backend: Node.js, REST APIs",
                "Database: Firebase Realtime DB and Cloud Firestore",
                "Security: OAuth 2.0, HTTPS/TLS encryption",
              ],
            },
            {
              title: "Wearable Integration",
              content:
                "AnxietyBuddy integrates with smartwatches to collect biometric data, especially heart rate, which is used for real-time anxiety assessments and validation of self-reported symptoms.",
              list: [
                "Integration with Fitbit, Apple HealthKit, and Google Fit APIs",
                "Real-time heart rate monitoring and analysis",
                "Custom algorithms to handle data inconsistencies and signal noise",
                "Correlation of biometric data with self-reported anxiety levels",
              ],
            },
            {
              title: "Core Functional Modules",
              content:
                "The application consists of several key modules designed to help users manage anxiety effectively:",
              list: [
                "Self-Assessment Module: Combines questionnaire responses with heart rate analysis to classify anxiety levels",
                "Cognitive Training: Interactive CBT exercises that help users identify thought distortions",
                "Breathing Guide: Guided breathing sessions using animations and haptic feedback",
                "Situation Entry Logging: Structured input of situations, thoughts, feelings, and behaviors",
                "Daily Check-In & Journaling: Self-reflection and gratitude journaling with mood/emotion tags",
                "Resource Aggregation: Curated readings, motivational quotes, and emergency hotline contacts",
              ],
            },
            {
              title: "AI and Data Processing",
              content:
                "AnxietyBuddy employs AI and data processing techniques to provide personalized experiences:",
              list: [
                "Real-time Analytics Engine: Simple ML models and heuristics for mood trends and stress forecasts",
                "Visualization through charts and summary reports",
                "Planned Virtual Therapist feature using fine-tuned Large Language Models",
                "NLP for categorizing journal entries and providing trend analytics",
              ],
            },
            {
              title: "Future Development",
              content: "Planned enhancements for AnxietyBuddy include:",
              list: [
                "VR Integration: To simulate and gradually expose users to anxiety-inducing scenarios",
                "Live Professional Connectivity: Encrypted in-app messaging or video calls with therapists",
                "Advanced AI: Fine-tuning LLMs on anonymized therapy transcripts for safe conversational support",
                "Expanded wearable integration with additional biometric sensors",
              ],
            },
          ],
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
          challenges:
            "Key challenges included designing appropriate cybersecurity content for different age groups, integrating AI components for personalized learning experiences, and creating an engaging user interface that would appeal to users of various ages while effectively conveying complex security concepts.",
          screenshots: [
            {
              src: "/project-images/screenshots/amnak1.jpg",
              alt: "Amnak Home Screen",
            },
            {
              src: "/project-images/screenshots/amnak2.jpg",
              alt: "Cybersecurity Lesson",
            },
            {
              src: "/project-images/screenshots/amnak3.jpg",
              alt: "Interactive Quiz",
            },
            {
              src: "/project-images/screenshots/amnak4.jpg",
              alt: "Admin Dashboard",
            },
            {
              src: "/project-images/screenshots/amnak5.jpg",
              alt: "User Progress Tracking",
            },
            {
              src: "/project-images/screenshots/amnak6.jpg",
              alt: "AI Recommendation Feature",
            },
          ],
          detailedDescription: [
            {
              title: "Project Overview",
              content:
                "Amnak is an innovative mobile application designed to address the critical need for cybersecurity education across different age groups. The project was developed as part of a research initiative to evaluate and enhance cybersecurity awareness through interactive, age-appropriate learning experiences enhanced by AI technology.",
              list: [
                "Target audience spans multiple age groups with tailored content",
                "Research-backed approach to cybersecurity education",
                "Published findings in IEEE Frontiers in Education Conference (FIE)",
              ],
            },
            {
              title: "Technical Implementation",
              content:
                "The application was built using React Native for cross-platform compatibility, with a React.js admin dashboard for content management. The architecture includes:",
              list: [
                "Cross-platform mobile frontend with React Native",
                "Admin dashboard built with React.js and JavaScript",
                "Backend services for user management and content delivery",
                "AI integration for personalized learning experiences and content recommendations",
              ],
            },
            {
              title: "Research Contributions",
              content:
                "As a research assistant on this project, I contributed to both the technical implementation and the academic research aspects:",
              list: [
                "Provided technical support to fellow students and team members",
                "Assisted with backend and frontend integration challenges",
                "Contributed to the research methodology and data analysis",
                "Co-authored the IEEE conference paper documenting our findings and approach",
              ],
            },
            {
              title: "Educational Features",
              content:
                "The app includes several key educational features designed to make cybersecurity concepts accessible and engaging:",
              list: [
                "Interactive lessons on various cybersecurity topics",
                "Age-appropriate content delivery and presentation",
                "Gamified quizzes and challenges to reinforce learning",
                "Progress tracking and personalized learning paths",
                "AI-powered recommendations for additional learning resources",
              ],
            },
            {
              title: "Impact and Outcomes",
              content:
                "The Amnak project has made significant contributions to cybersecurity education research:",
              list: [
                "Demonstrated measurable improvements in cybersecurity awareness among users",
                "Provided valuable insights into effective educational approaches for different age groups",
                "Established a framework for AI integration in security education",
                "Research findings accepted and published in a prestigious IEEE conference",
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Contacts List",
          description:
            "A native Android contact management application built using C++, Java, QML, and CMake, offering a responsive and intuitive user interface for managing contact information.",
          image: null, // No image, will use text instead
          technologies: [
            "C++",
            "QML",
            "Java",
            "CMake",
            "Qt Framework",
            "Android",
          ],
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
          challenges:
            "Key challenges included implementing efficient data binding between C++ backend and QML frontend, ensuring smooth performance on various Android devices, and creating a responsive UI that adheres to modern design principles.",
          detailedDescription: [
            {
              title: "Project Overview",
              content:
                "Contacts List is an Android application designed to provide users with a clean, efficient way to manage their contacts. Built with a combination of C++, Java, and QML, the app demonstrates how to leverage native performance while maintaining a modern, responsive user interface.",
              list: [
                "Native Android application for contact management",
                "Hybrid approach using C++ for backend logic and QML for UI",
                "Cross-platform build system using CMake",
              ],
            },
            {
              title: "Technical Implementation",
              content:
                "The application architecture separates concerns between the backend data management and the frontend user interface:",
              list: [
                "C++ backend for core data structures and contact management logic",
                "QML frontend for responsive and dynamic user interface components",
                "Data binding between C++ models and QML views for real-time updates",
                "CMake build system for managing dependencies and cross-platform compatibility",
              ],
            },
            {
              title: "Key Features",
              content:
                "The application includes several features designed to enhance the user experience:",
              list: [
                "Add and view contacts with comprehensive contact information",
                "Dynamic UI that responds to user interactions and data changes",
                "Custom UI components including text inputs, buttons, and headers",
                "Efficient data synchronization between UI and backend",
              ],
            },
            {
              title: "Project Structure",
              content:
                "The codebase is organized to maintain separation of concerns and promote maintainability:",
              list: [
                "main.cpp: Application entry point that sets up the QML engine",
                "ContactsModel.cpp/h: C++ model for managing contacts and exposing data to QML",
                "QML directory: Contains all user interface files including Main.qml, ContactView.qml, and custom components",
                "CMakeLists.txt: Build configuration for cross-platform compatibility",
              ],
            },
            {
              title: "Learning Outcomes",
              content: "This project provided valuable experience in:",
              list: [
                "Integrating C++ with QML for high-performance mobile applications",
                "Implementing the Model-View-Controller pattern in a mobile context",
                "Creating custom UI components for a consistent user experience",
                "Using CMake for managing complex build processes across platforms",
              ],
            },
          ],
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

      const foundProject = projects.find((p) => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="btn btn-primary"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </motion.button>
        </div>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetails;
