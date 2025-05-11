import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBook, FiUser } from 'react-icons/fi';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript (ES6+)', 'Java', 'C++', 'SQL', 'Bash'] },
    { category: 'Web Technologies', items: ['Django', 'Django REST Framework', 'React.js', 'HTML5', 'CSS3', 'Tailwind', 'Next.js'] },
    { category: 'Data & Databases', items: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB', 'Pandas', 'NumPy', 'scikit-learn', 'Prophet'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Nginx', 'GitHub Actions', 'AWS EC2/S3', 'Linux (Ubuntu)', 'VS Code', 'Git', 'Figma'] },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="section-title text-center">About Me</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1"
            >
              <div className="card">
                <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
                  {/* Replace with your profile image */}
                  <div className="w-full h-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <div className="text-8xl text-blue-600 dark:text-blue-400 font-bold">SD</div>
                    {/* Uncomment and use your image instead */}
                    {/* <img 
                      src="/profile-image.jpg" 
                      alt="Simon Darota" 
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                
                <div className="flex justify-center mb-6">
                  <a 
                    href="/Simon_Darota_Resume.pdf" 
                    download
                    className="btn btn-primary flex items-center"
                  >
                    <FiDownload className="mr-2" /> Download Resume
                  </a>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Personal Information
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Location:</span>
                      <span>Dubai, UAE</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Email:</span>
                      <a href="mailto:simondarota@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        simondarota@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Status:</span>
                      <span>Golden Visa Holder</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="card mb-8">
                <div className="flex items-center mb-4">
                  <FiUser className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm Simon Kebede Darota, a passionate Fullstack Developer with expertise in Django, Python, React, and Java. 
                  I specialize in building robust, scalable, and user-friendly web applications that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With a strong foundation in both frontend and backend development, I enjoy working across the entire technology stack
                  to deliver complete solutions. I'm particularly interested in data-driven applications and creating intuitive user experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently based in Dubai, UAE, I'm always looking for new challenges and opportunities to grow as a developer
                  and contribute to innovative projects.
                </p>
              </div>

              <div className="card mb-8">
                <div className="flex items-center mb-4">
                  <FiBook className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">United Arab Emirates University (UAEU)</h3>
                    <p className="text-gray-600 dark:text-gray-400">B.Sc. in Computer Science, Minor in Statistics and Data Analytics</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Jan 2020 - Aug 2024</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">New York University Abu Dhabi (NYUAD)</h3>
                    <p className="text-gray-600 dark:text-gray-400">Liberal Arts, Leadership and Public Speaking (Non-degree)</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2022 - Apr 2023</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <FiAward className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
