import React, { Component } from 'react';
import './buyertopnav.css'; // You can create and customize this CSS file for styling
import dollarImage from '../Assets/dollar.png'; // Import the dollar image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default class BuyerTopnav extends Component {
  render() {
    const { logoUrl, profilePhotoUrl, coins } = this.props;

    return (
      <div className="buyer-topnav">
        <div className="left-section">
          <Link to="/">
            <button className='homebutton'>
              <img src={logoUrl} className='logo' />
            </button>
          </Link>
        </div>
        <div className="right-section">
        <img src={dollarImage} alt="Dollar" className="coin" />
          <div className="coins">
            
            {coins}
          </div>
          <img src={profilePhotoUrl} alt="Profile" className="circular-photo" />
        </div>
      </div>
    );
  }
}
