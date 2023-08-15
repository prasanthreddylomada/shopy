import React, { Component } from 'react';
import './buyertopnav.css';
import dollarImage from '../Assets/dollar.png';
import { Link } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';

export default class SellerTopnav extends Component {
  render() {
    const { logoUrl, profilePhotoUrl, coins } = this.props; // Destructure isBuyer prop
    return (
      <div className="buyer-topnav">
        <div className="left-section">
            <Link to="/sellerhome">
              <button className='homebutton'>
                <img src={logo} alt="Logo" className='topnav-logo' />
              </button>
            </Link>
          
        </div>
        <div className="right-section">
          <div className="coins">
            {coins}
          </div>
          <img src={dollarImage} alt="Dollar" className="coin" />
          <img src={profilePhotoUrl} alt="Profile" className="circular-photo" />
        </div>
      </div>
    );
  }
}
