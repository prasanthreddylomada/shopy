import React, { Component } from 'react';
import './buyerlogin.css'; // You can create and customize this CSS file for styling
import { Link } from 'react-router-dom';

class BuyerLogin extends Component {
  render() {
    return (
      <div className="buyer-login-container">
        <img src="./metamask-logo.png" alt="Metamask Logo" className="logo" />
        <Link to='/buyerhome'>
        <button className="connect-button">login with Metamask</button>
        </Link>
        <Link to="/sellerlogin">
        <button className="login-as-seller">Login as a seller?</button>
        </Link>
      </div>
    );
  }
}

export default BuyerLogin;
