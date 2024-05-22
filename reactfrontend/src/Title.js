import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import logo from './image/sh.png'; // Import the logo image

const MyComponent = () => {
  useEffect(() => {
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
      <Helmet>
        <title>System Heuristics</title>
        <meta name="description" content="This is my component" />
        <link rel="canonical" href="https://www.example.com/my-component" />
      </Helmet>
     
    </div>
  );
};

export default MyComponent;
