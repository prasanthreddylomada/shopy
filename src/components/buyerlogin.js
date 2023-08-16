import React, { Component } from 'react';
import './buyerlogin.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';

class BuyerLogin extends Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
      <div className="buyer-login-container">
        <img src={logo} alt="Metamask Logo" className="home-logo"/>
        <Link to={{
          pathname: '/buyerhome',
        }}>
          <button className="connect-button" >login with Metamask</button>
        </Link>
        <Link to="/sellerlogin">
          <button className="login-as-seller">Login as a seller?</button>
        </Link>
      </div>
    );
  }
}

export default BuyerLogin;
