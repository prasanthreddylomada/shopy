import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SellerLogin extends Component {
  render() {
    return (
      <div className="buyer-login-container">
        <img src="./metamask-logo.png" alt="Metamask Logo" className="logo" />
        <button className="connect-button">login with Metamask</button>
        <Link to="/buyerlogin">
        <button className="login-as-seller">Login as a buyer?</button>
        </Link>
      </div>
    );
  }
}

export default SellerLogin;
