import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import productImage1 from './ProductImages/product1.png'; // Correct the import path for the first product image
import './Page6.css'; // Import a CSS file for styling
import hI from './ProductImages/H2.svg'; // Import your integrations icon
import adminIcon from './ProductImages/AP2.svg'; // Import your admin panel icon
import integrationsIcon from './ProductImages/InteIcon.svg'; // Import your integrations icon
import AdminDropdownMenu from './AdminDropdownMenu'; // Import the dropdown menu component
import logoutImage from './ProductImages/logout.svg';

function Page6() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState('');

  const handleAdminButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAppClick = (appName) => {
    setSelectedApp(appName);
    setIsDropdownOpen(false);
  };
    return (
      <div className="page-content">
        <div className="side-panel">
          {/* Product Logo */}
          <img src={productImage1} alt="Product Logo" className="product-logo" />
  
          {/* Buttons */}
          <Link to="/Page4" className="side-panel-button">
          <img src={hI} alt="Home Icon" className="button-icon" />
          Home
          </Link>
  
          <Link to="/Page5" className="side-panel-button">
          <img src={integrationsIcon} alt="Integrations Icon" className="button-icon" />
          Integrations
          </Link>
  
          <Link to="/Page6" className="side-panel-button admin-button" onClick={handleAdminButtonClick}>
          <img src={adminIcon} alt="Admin Panel Icon" className="button-icon" />
          Admin Panel
          </Link>
          {/* Logout Button */}
        <button className="side-panel-button logout-button">
          <img src={logoutImage} alt="Logout Icon" className="button-icon" />
          Logout
        </button>
          {/* Dropdown Menu */}
        <AdminDropdownMenu isOpen={isDropdownOpen} onAppClick={handleAppClick} />
        </div>
        <div className="horizontal-line"></div>
        <div className="main-content">
          
        </div>
      </div>
    );
  }
export default Page6;
