# Simon Darota Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase my skills, projects, and professional experience as a fullstack developer specializing in Django, Python, React, and Java.

![Portfolio Preview](public/portfolio-preview.png)

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between themes based on preference
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Comprehensive Sections**:
  - Home: Introduction and featured projects
  - About: Personal information, education, and skills
  - Experience: Professional timeline and achievements
  - Projects: Showcase of technical projects with filtering
  - Contact: Email contact form with validation
- **Project Showcases**: Detailed project pages with comprehensive information
- **PDF Viewer**: Custom PDF viewer for project posters with zoom functionality
- **Resume Download**: Direct access to download resume

## Technologies Used

### Frontend
- **React.js**: Core library for building the user interface
- **React Router**: For seamless navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: For smooth animations and transitions
- **React Icons**: Comprehensive icon library

### Functionality
- **EmailJS**: For contact form email integration
- **PDF Viewer**: Custom component for displaying project documentation
- **Dark/Light Mode**: Theme toggle with local storage persistence

### Development & Deployment
- **Create React App**: For project bootstrapping and configuration
- **npm**: Package management
- **Git**: Version control
- **Netlify/Vercel**: Hosting and continuous deployment

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/simonkb/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Deployment

This website can be deployed to various platforms:

### Firebase Hosting

1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

2. Login to Firebase
```bash
firebase login
```

3. Initialize Firebase
```bash
firebase init
```

4. Build the project
```bash
npm run build
```

5. Deploy to Firebase
```bash
firebase deploy
```

### Netlify

1. Build the project
```bash
npm run build
```

2. Deploy using Netlify CLI or connect your GitHub repository to Netlify for continuous deployment.

## Project Structure

```
├── public/                  # Public assets
│   ├── project-images/      # Project images and screenshots
│   ├── AnxietyBuddy.pdf     # PDF poster for AnxietyBuddy project
│   └── Simon_Darota_Resume.pdf  # Downloadable resume
├── src/                     # Source files
│   ├── components/          # Reusable components
│   │   ├── Navbar.js        # Navigation bar component
│   │   ├── Footer.js        # Footer component
│   │   ├── ThemeToggle.js   # Dark/Light mode toggle
│   │   └── projects/        # Project-related components
│   │       ├── ProjectDetail.js  # Project details display
│   │       └── PdfViewer.js      # PDF viewer component
│   ├── pages/               # Main page components
│   │   ├── Home.js          # Landing page
│   │   ├── About.js         # About page
│   │   ├── Projects.js      # Projects listing page
│   │   ├── ProjectDetails.js # Individual project page
│   │   ├── Experience.js    # Professional experience page
│   │   └── Contact.js       # Contact form page
│   ├── App.js               # Main application component
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
└── package.json             # Project dependencies and scripts
```

## Customization

### Personal Information
- Update content in `Home.js`, `About.js`, and `Experience.js` to reflect your personal information
- Replace the resume file in the public directory with your own

### Projects
- Modify project entries in `Projects.js` to showcase your own work
- Add project details in `ProjectDetails.js` for comprehensive project pages
- Place project images in the `public/project-images/` directory
- For projects with PDF documentation, add PDFs to the public directory

### Styling
- Adjust the color scheme in `tailwind.config.js`
- Modify animations in Framer Motion components for different effects

### Contact Form
- Configure EmailJS with your own account details in `Contact.js`
- Update form fields as needed for your specific requirements

## License

This project is open source and available under the [MIT License](LICENSE).

## Key Features Explained

### Dynamic Project Filtering
The Projects page includes a category-based filtering system that allows visitors to filter projects by technology type (Web Development, Mobile Apps, AI & ML, Robotics). The implementation ensures smooth transitions between filters with proper animations.

### PDF Viewer Component
A custom PDF viewer component was created for the AnxietyBuddy project, allowing visitors to view the project poster with zoom in/out functionality and download options. This provides a more interactive way to showcase detailed project documentation.

### Responsive Design
The entire website is built with a mobile-first approach, ensuring optimal viewing experience across devices of all sizes. The layout adjusts dynamically using Tailwind CSS's responsive utilities.

### Dark/Light Mode
A theme toggle allows visitors to switch between dark and light modes based on their preference. The selected theme is saved to local storage for persistence across visits.

### Project Details Pages
Each project has a dedicated details page with comprehensive information including:
- Project overview
- Technologies used
- Key features
- Technical implementation details
- Challenges and solutions
- Screenshots or interactive elements

## Contact

Simon Darota  
Email: [simondarota@gmail.com](mailto:simondarota@gmail.com)  
Location: Dubai, UAE  
GitHub: [github.com/simonkb](https://github.com/simonkb)  
Project Link: [https://github.com/simonkb/portfolio-website](https://github.com/simonkb/portfolio-website)
