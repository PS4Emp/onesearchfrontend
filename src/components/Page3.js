import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Page3.css'; // Import CSS for styling
import productImage1 from './ProductImages/product1.png';
import gmailImage from './ProductImages/gmailImage.png';
import githubImage from './ProductImages/githubImage.png';
import slackImage from './ProductImages/slackImage.png';
import driveImage from './ProductImages/driveImage.png';
import jiraImage from './ProductImages/jiraImage.png';
import notionImage from './ProductImages/notionImage.png';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"></link>

function Page3() {

  useEffect(() => {
    // Create a <link> element for Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
    link.rel = 'stylesheet';

    // Append the <link> element to the <head> of the document
    document.head.appendChild(link);

    // Clean up the <link> element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [selectedApps, setSelectedApps] = useState([]); // Array to store selected apps
  const apps = [
    { name: 'Gmail', iconUrl: gmailImage },
    { name: 'Github', iconUrl: githubImage },
    { name: 'Slack', iconUrl: slackImage },
    { name: 'Drive', iconUrl: driveImage },
    { name: 'Jira', iconUrl: jiraImage },
    { name: 'Notion', iconUrl: notionImage },
  ];
   // Function to toggle app selection
   const toggleAppSelection = (appName) => {
    if (selectedApps.includes(appName)) {
      // If already selected, remove it from the selection
      setSelectedApps(selectedApps.filter((app) => app !== appName));
    } else {
      // If not selected, add it to the selection
      setSelectedApps([...selectedApps, appName]);
    }
  };

  return (
    <div>
      {/* Product Logo */}
      <div className="product-logo">
        <img src={productImage1} alt="Product Logo" />
      </div>

       {/* Text below product logo */}
       <div className="product-text">
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500', color: '#787676', textAlign: 'center' }}>
          Select one or more than apps to make the data relevant < br /> 
          to you available and help us design you a personalized workflow
        </p>
      </div>

      {/* Apps */}
      
      <div className="container">
        <div className="row">
          {apps.slice(0, 3).map((app, index) => (
            <AppBox key={index} name={app.name} iconUrl={app.iconUrl} />
          ))}
        </div>
        <div className="row">
          {apps.slice(3).map((app, index) => (
            <AppBox key={index} name={app.name} iconUrl={app.iconUrl} />
          ))}
        </div>
        <Link to="/page4">
        <button className="sign-in-button1">Continue</button>
        </Link>
      </div>
    </div>
  );
}

function AppBox({ name, iconUrl, isSelected, onClick }) {
  // Define the style based on isSelected
  const boxStyle = {
    backgroundColor: isSelected ? '#007bff' : '', // Change to your desired background color
    color: isSelected ? '#fff' : '', // Change to your desired text color
  };

  return (
    <div
      className="box"
      style={boxStyle}
      onClick={onClick}
    >
      <div className="app-icon">
        <img src={iconUrl} alt={`${name} Icon`} />
      </div>
      <div className="app-name">{name}</div>
    </div>
  );
}
export default Page3;