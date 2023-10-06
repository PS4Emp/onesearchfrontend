import React from 'react';
import productImage1 from './ProductImages/product1.png'; // Correct the import path for the first product image
import productImage2 from './ProductImages/product2.png'; // Correct the import path for the second product image
import { Link } from 'react-router-dom';
import './Home.css'; // Import a CSS file for styling

function Home() {
  return (
    <div className="home-container">
        <img src={productImage1} alt="Product 1" className="page2-product-image" />
        <img src={productImage2} alt="Product 2" className='second-product-image'/>
        <Link to="/page1">
        <button className="sign-in-button1">Continue</button>
        </Link>
    </div>
  );
}

export default Home;
