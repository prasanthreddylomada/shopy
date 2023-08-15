import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';

class SellerLogin extends Component {
  handleLoginClick = () => {
    console.log('Login with Metamask button clicked');
  };


  render() {
    return (
      <div className="buyer-login-container">
        <img src={logo} alt="Metamask Logo" className="home-logo" />
        <Link to="/sellerhome">
          <button className="connect-button" onClick={this.handleLoginClick}>login with Metamask</button>
        </Link>
        <Link to="/buyerlogin">
          <button className="login-as-seller">Login as a buyer?</button>
        </Link>
      </div>
    );
  }
}

export default SellerLogin;
