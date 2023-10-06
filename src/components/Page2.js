import React from 'react';
import { Link } from 'react-router-dom';
import productImage1 from './ProductImages/product1.png';
import googlelogo from './ProductImages/googlelogo.png'
import './Page2.css';

function Page2() {
  const handleSignInWithGoogle = () => {
    // Implement Google sign-in logic here
    alert('Sign in with Google clicked'); // Replace with actual Google sign-in code
  };

  return (
    <div className="page2-container">
      <img src={productImage1} alt="Product 1" className="page2-product-image" />
      <div className="sign-in-container">
        <h2>Welcome to OneSearch</h2>
        <div className="input-container">
          <input type="email" placeholder="Email" className='input-box'/>
          <input type="password" placeholder="Password" className='input-box'/>
        </div>
        <Link to="/page3">
        <button className="sign-in-button">Continue</button>
        </Link>
        <p> Or </p>
           {/* Google Sign-In button with Google logo */}
  <a href="#" className="google-sign-in-button">
    <img src={googlelogo} alt="Google Logo" className="google-logo" />
    <span className="sign-in-text">Sign in with Google</span>
  </a>

  {/* Continue button */}
        </div>
      </div>
  );
}

export default Page2;
