import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom'; 
import './HomePage.css'; 
import dollarImage from '../Assets/dollar.png';
import logo from '../Assets/Shopy.svg';

class HomePage extends Component {
  handleLoginClick = () => {
    console.log('Login button clicked');
  };

  handleSignupClick = () => {
    console.log('Signup button clicked');
  };

  render() {
    return (
      <div className="homepage-container">
        <img src={logo} alt="Logo" className="home-logo" />
        <Link to="/buyerlogin">
          <button className="login-button" onClick={this.handleLoginClick}>Login</button>
        </Link>
        <Link to='/signup'>
          <button className="signup-metamask-button" onClick={this.handleSignupClick}>Signup with Metamask</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
