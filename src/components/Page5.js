import React from 'react';
import { Link } from 'react-router-dom';
import productImage1 from './ProductImages/product1.png'; //  the import path for the first product image
import './Page5.css'; // Import CSS file for styling
import h2 from './ProductImages/H2.svg'; // Import the integrations icon
import adminPanelIcon from './ProductImages/AdminIcon.svg'; // Import the admin panel icon
import i2 from './ProductImages/I2.svg'; // Import the integrations icon
import gmailImage from './ProductImages/gmailImage.png';
import githubImage from './ProductImages/githubImage.png';
import slackImage from './ProductImages/slackImage.png';
import driveImage from './ProductImages/driveImage.png';
import jiraImage from './ProductImages/jiraImage.png';
import notionImage from './ProductImages/notionImage.png';
import c2 from './ProductImages/connect.svg';
import logoutImage from './ProductImages/logout.svg';

function Page5() {
    const apps = [
        {
            name: 'Gmail',
            iconUrl: gmailImage, //  the imported image variable
            description: 'Description of App 1 goes here. ',
          },
          {
            name: 'Jira',
            iconUrl: jiraImage, //  the imported image variable
            description: 'Description of App 2 goes here.',
          },
          {
            name: 'Slack',
            iconUrl: slackImage, // the the imported image variable
            description: 'Description of App 3 goes here.',
          },
          {
            name: 'Github',
            iconUrl: githubImage, //  the imported image variable
            description: 'Description of App 4 goes here.',
          },
          {
            name: 'Notion',
            iconUrl: notionImage, //  the imported image variable
            description: 'Description of App 5 goes here.',
          },
          {
            name: 'Google Drive',
            iconUrl: driveImage, //  the imported image variable
            description: 'Description of App 6 goes here.',
          },
      ];
    
    return (
      <div className="page-content">
        <div className="side-panel">
          {/* Product Logo */}
          <img src={productImage1} alt="Product Logo" className="product-logo" />
  
          {/* Buttons */}
          <Link to="/Page4"button className="side-panel-button ">
            <img src={h2} alt="Admin Panel Icon" className="button-icon" />
            Home
          </Link>
  
          <Link to="/Page5" className="side-panel-button integrations-button">
          <img src={i2} alt="Integrations Icon" className="button-icon" />
          Integrations
          </Link>
  
          <Link to="/Page6" className="side-panel-button adminpanel-button">
          <img src={adminPanelIcon} alt="Admin Panel Icon" className="button-icon" />
          Admin Panel
          </Link>
          {/* Logout Button */}
         <button className="side-panel-button logout-button">
          <img src={logoutImage} alt="Logout Icon" className="button-icon" />
          Logout
        </button> 
        </div>
        <div className="horizontal-line"></div>
        <div className="main-content">
        <div className="main-content">
        <h1 className="integrations-heading">Integrations</h1>
        <p className="integrations-subheading">
          Connect all the applications to leverage the best performance
        </p>
        {/* Rest of the page content */}
      </div>
         
        {/* Boxes */}
        <div className="box-container">
          {apps.map((app, index) => (
            <div className="box" key={index}>
              <div className="app-icon">
                <img src={app.iconUrl} alt={`${app.name} Icon`} />
              </div>
              <h2 className="app-name">{app.name}</h2>
              <p className="app-description">{app.description}</p>
              <button className="connect-button">
                <img src={c2} alt="Connect Icon" className="connect-icon" />
                <span style={{ marginLeft: '51px', fontSize: '18px', fontFamily: 'Merge One' }}>Connect</span>
              </button>
            </div>
          ))}
        </div>

</div>
          {/* Rest of the page content */}
        </div>
    
    );
  }
export default Page5;
