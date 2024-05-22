import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import logo from './image/sh.png'; // Import the logo image

const MyComponent = () => {
  useEffect(() => {
    // Set the document title immediately upon component mount
    document.title = "System Heuristics";

    // Create a link element for the logo
    const logoLink = document.createElement('link');
    logoLink.rel = 'icon';
    logoLink.type = 'image/jpg';
    logoLink.href = logo;
    document.head.appendChild(logoLink);

    // Cleanup function to remove the logo link when component unmounts
    return () => {
      document.head.removeChild(logoLink);
    };
  }, []); // Run only once when the component mounts

  return (
    <div>
      {/* Use Helmet for other meta tags if needed */}
      <Helmet>
        <meta name="description" content="This is my component" />
        <link rel="canonical" href="https://www.example.com/my-component" />
      </Helmet>
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;
