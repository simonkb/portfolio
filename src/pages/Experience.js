import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Sensia Ventures Group',
      position: 'Full-Stack Developer',
      location: 'Dubai, UAE',
      period: 'Sep 2024 - Present',
      description: [
        'Designed and developed an end-to-end Data Analytics Web Platform using Django (DRF), React, and MySQL.',
        'Integrated RESTful APIs to collect and unify data from platforms including Shiphero, Sublytics, Tiger Tech (call center), and logistics APIs.',
        'Built real-time analytics dashboards using React (Hooks, Redux Toolkit, Chart.js) to replace manual reporting by data analysts.',
        'Implemented predictive models using scikit-learn and Prophet to forecast stock levels and anticipate out-of-stock situations.',
        'Developed AI-powered assistant using OpenAI API to answer business queries about marketing performance, product trends, and segmentation ROI.',
        'Created inventory management module with alert system, SKU tracking, reorder forecasting, and integration with logistics APIs.',
        'Deployed application on Contabo cloud infrastructure using Docker containers; integrated Amazon S3 for scalable, secure file storage.'
      ],
      skills: ['Django', 'React', 'MySQL', 'Docker', 'AWS S3', 'Redux', 'Chart.js', 'scikit-learn', 'Prophet', 'OpenAI API']
    },
    {
      id: 2,
      company: 'FYI.AI Focus Your Ideas',
      position: 'Software Engineering Intern',
      location: 'Dubai, UAE',
      period: 'May 2024 - Aug 2024',
      description: [
        'Developed mobile apps using Qt QML frontend, Java backend, and C++ interoperability for native performance.',
        'Created a Contacts List manager app with device-level permissions and CRUD features.',
        'Contributed 25+ PRs with 16 merged into production, emphasizing modular design and unit testing.'
      ],
      skills: ['Qt QML', 'Java', 'C++', 'Mobile Development', 'Unit Testing']
    },
    {
      id: 3,
      company: 'Mohamed Bin Zayed University of AI (MBZUAI)',
      position: 'Undergraduate Research Intern',
      location: 'Abu Dhabi, UAE',
      period: 'May 2023 - Jun 2023',
      description: [
        'Developed reinforcement learning models (A2C, TD3, SAC) to optimize smart grid energy distribution.',
        'Built simulation environments with renewable energy constraints and battery storage models.'
      ],
      skills: ['Python', 'Reinforcement Learning', 'TensorFlow', 'Pandas', 'NumPy']
    },
    {
      id: 4,
      company: 'NYU Abu Dhabi (NYUAD)',
      position: 'Visiting Undergraduate Researcher',
      location: 'Abu Dhabi, UAE',
      period: 'Jun 2022 - Aug 2022',
      description: [
        'Implemented and evaluated SLAM algorithms (ORB_SLAM3, DROID SLAM) on EuRoC/TUM-VI datasets.',
        'Integrated real-time SLAM in Husky Robot using ROS Noetic and simulated with Gazebo + RViz.'
      ],
      skills: ['Python', 'C++', 'ROS', 'Gazebo', 'Computer Vision', 'SLAM']
    }
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
          <h1 className="section-title">Professional Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey as a developer and researcher, showcasing my growth and contributions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty div for layout on alternating sides */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <FiBriefcase className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    United Arab Emirates University (UAEU)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    B.Sc. in Computer Science, Minor in Statistics and Data Analytics
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                <FiCalendar className="mr-1" />
                <span>Jan 2020 - Aug 2024</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Completed a comprehensive computer science program with a focus on programming,
                algorithms, data structures, and software engineering. Complemented with a minor
                in Statistics and Data Analytics to strengthen data analysis skills.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <FiBriefcase className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    New York University Abu Dhabi (NYUAD)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Liberal Arts, Leadership and Public Speaking (Non-degree)
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                <FiCalendar className="mr-1" />
                <span>Aug 2022 - Apr 2023</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Participated in specialized programs focused on developing leadership skills,
                public speaking abilities, and a broader understanding of liberal arts.
                This complementary education enhanced my communication and presentation skills.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
