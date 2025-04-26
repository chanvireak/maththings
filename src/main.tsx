// Application entry point: render the React app into the DOM
import { StrictMode } from 'react'; // Enable extra checks and warnings in development
import { createRoot } from 'react-dom/client'; // React 18 root API for mounting
import App from './App.tsx'; // Main App component
import './index.css'; // Global stylesheet

// Initialize and render the React application into the root DOM node
createRoot(document.getElementById('root')!).render(
  <StrictMode> {/* Wrap application in StrictMode to highlight potential problems */}
    <App /> {/* Render the main application component */}
  </StrictMode>,
); // Finish the render call
