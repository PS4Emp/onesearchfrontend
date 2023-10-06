import React from 'react';
import productImage1 from './ProductImages/product1.png'; // Correct the import path for the first product image
import { Link } from 'react-router-dom';
import './Page1.css'; // Import a CSS file for styling

function Home() {
  return (
    <div className="home-container">
        <img src={productImage1} alt="Product 1" className="page2-product-image" />
        <div className="text-container">
        <div className="left-text">
          Search across your workspace, documents, apps, channels, and many more!
        </div>
        <div className='center-text'>
        Talk to your data! Get insights using OneSearch
        </div>
        <div className='right-text'>
        Experience AI by asking anything related to your projects, teams and organisation!
        </div>
      </div>
        <Link to="/page2">
        <button className="sign-in-button2">Continue</button>
        </Link>
    </div>
  );
}

export default Home;
