import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiDatabase, FiServer } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Simon Darota
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Fullstack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I build exceptional digital experiences with Django, Python,
                React, and Java. Passionate about creating clean, efficient, and
                user-friendly applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="btn btn-primary flex items-center"
                >
                  View My Work <FiArrowRight className="ml-2" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-image.JPG"
                  alt="Simon Darota"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">My Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in building robust applications with modern
              technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <FiCode className="text-blue-600 dark:text-blue-400 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Frontend Development
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Building responsive and interactive user interfaces with
                React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• React.js / Next.js</li>
                <li>• JavaScript (ES6+)</li>
                <li>• HTML5 / CSS3 / Tailwind</li>
                <li>• React Native</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <FiServer className="text-blue-600 dark:text-blue-400 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Backend Development
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Creating robust server-side applications with Django, Python,
                and Java.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Django / Django REST Framework</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• C++</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <FiDatabase className="text-blue-600 dark:text-blue-400 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Database & DevOps
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Managing data and infrastructure with SQL and NoSQL databases,
                Docker, and cloud services.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• MySQL / PostgreSQL</li>
                <li>• Firebase / MongoDB</li>
                <li>• Docker / Nginx</li>
                <li>• AWS EC2/S3 / Linux</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <FiCode className="text-blue-600 dark:text-blue-400 text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Cross-Platform Development
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Building native and cross-platform mobile applications for iOS and Android
                with various technologies.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• React Native / Expo</li>
                <li>• Android / Java</li>
                <li>• iOS / Swift</li>
                <li>• Qt QML with C++ and Java</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects. Check out my projects page
              for more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-center mb-4 h-32">
                <img 
                  src="/project-images/anxiety_buddy_icon.png" 
                  alt="AnxietyBuddy App Logo" 
                  className="h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                AnxietyBuddy Mental Health App
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                React Native, Firebase, Firestore, NoSQL, Expo, i18n
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A cross-platform mental health app built with React Native,
                featuring real-time syncing, offline persistence, and
                multi-language support.
              </p>
              <div className="flex justify-end">
                <Link
                  to="/projects/2"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  View Details <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center justify-center mb-4 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-800/20 rounded-lg">
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 flex items-center justify-center p-2 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">DVS</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                DataVision Studio
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                Django, React, Redux, MySQL, Chart.js, Docker
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An end-to-end data analytics web platform that collects and unifies data from multiple sources to provide real-time insights and predictive analytics.
              </p>
              <div className="flex justify-end">
                <Link
                  to="/projects/1"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  View Details <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time
              positions, or collaborations. Let's build something amazing
              together!
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
