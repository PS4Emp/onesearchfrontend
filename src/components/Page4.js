import React, { useEffect } from 'react';
import searchIcon from './ProductImages/light.png'
import { Link } from 'react-router-dom';
import productImage1 from './ProductImages/product1.png'; // Correct the import path for the first product image
import './Page4.css'; // Import a CSS file for styling
import homeIcon from './ProductImages/Homeicon.svg'; // Import your integrations icon
import adminPanelIcon from './ProductImages/AdminIcon.svg'; // Import your admin panel icon
import integrationsIcon from './ProductImages/InteIcon.svg'; // Import your integrations icon
import logoutImage from './ProductImages/logout.svg';

function Page4() {
    useEffect(() => {
        // Function to handle search type change
        function handleSearchTypeChange(selectedType) {
          const searchInput = document.getElementById('searchInput');
          if (searchInput) {
            searchInput.value = selectedType;
          }
        }
      }, []); 
    function handleSearchTypeChange(selectedType) {
        // Update the displayed search type
        document.getElementById('searchInput').value = selectedType;
              }  
    return (
      <div className="page-content">
        <div className="side-panel">
        <button className="side-panel-button logout-button">
          <img src={logoutImage} alt="Logout Icon" className="button-icon" />
          Logout
        </button>
          {/* Product Logo */}
          <img src={productImage1} alt="Product Logo" className="product-logo" />
  
          {/* Buttons */}
          <button className="side-panel-button home-button">
            <img src={homeIcon} alt="Admin Panel Icon" className="button-icon" />
            Home
          </button>
  
          <Link to="/Page5" className="side-panel-button">
          <img src={integrationsIcon} alt="Integrations Icon" className="button-icon" />
          Integrations
          </Link>
  
          <Link to="/Page6" className="side-panel-button">
          <img src={adminPanelIcon} alt="Admin Panel Icon" className="button-icon" />
          Admin Panel
          </Link>
        </div>
        <div className="horizontal-line"></div>
        <div className="main-content">
  
          {/* Search Bar */}
          <div className="search-bar">
  <div className="search-input-container">
    <img src={searchIcon} alt="Search Icon" className="search-icon" />
    <input
      type="text"
      className="search-input"
      placeholder="Search across your workspace for documents, slides, messages, etc."
    />
    <div className="dropdown">
  <button className="dropbtn">
    Type of search <span className="arrow">&#9662;</span>
  </button>
  <div className="dropdown-content">
    <a href="#" onClick={() => handleSearchTypeChange('AI search')}>AI search</a>
    <a href="#" onClick={() => handleSearchTypeChange('Keyword search')}>Keyword search</a>
  </div>
</div>

  </div>
</div>
          {/* Rest of your page content */}
           {/* Logout Button */}
        </div>
      </div>
    );
  }
export default Page4;
