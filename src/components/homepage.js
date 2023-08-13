import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // You can create and customize this CSS file for styling
import dollarImage from '../Assets/dollar.png';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <img src={dollarImage} alt="Logo" className="logo" />
        <Link to="/buyerlogin">
          <button className="login-button">Login</button>
        </Link>
        <Link to='/signup'>
        <button className="signup-metamask-button">Signup with Metamask</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
