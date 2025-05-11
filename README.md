# Simon Darota Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects as a fullstack developer.

## Features

- Responsive design for all devices
- Dark/Light mode toggle
- Interactive UI with smooth animations
- Project filtering and detailed project pages
- PDF viewer for project documentation
- Contact form with email integration
- Resume download functionality

## Technologies Used

- React.js with React Router
- Tailwind CSS for styling
- Framer Motion for animations
- EmailJS for contact form
- Firebase for hosting and analytics

## Getting Started

### Prerequisites
- Node.js and npm

### Installation
```bash
# Clone the repository
git clone https://github.com/simonkb/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start the development server
npm start
```

## Deployment

### Firebase Hosting
```bash
# Install Firebase CLI if not installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## Project Structure

```
├── public/            # Static assets
├── src/               # Source code
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── firebase/      # Firebase configuration
│   ├── App.js         # Main app component
│   └── index.js       # Entry point
└── package.json       # Dependencies
```

## Customization

- **Content**: Update personal information in `Home.js`, `About.js`, and `Experience.js`
- **Projects**: Modify project entries in `Projects.js` and details in `ProjectDetails.js`
- **Styling**: Adjust colors in `tailwind.config.js`
- **Contact**: Configure EmailJS in `Contact.js`

## Environment Setup

Create a `.env` file in the root directory with your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## License

This project is open source and available under the MIT License.

## Contact

Simon Darota  
Email: [simondarota@gmail.com](mailto:simondarota@gmail.com)  
Location: Dubai, UAE  
GitHub: [github.com/simonkb](https://github.com/simonkb)
