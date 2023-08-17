import React, { Component } from 'react';
import './buyertopnav.css';
import dollarImage from '../Assets/dollar.png';
import { Link } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';

export default class BuyerTopnav extends Component {
  state = {
    isSideMenuOpen: false,
  };

  toggleSideMenu = () => {
    this.setState((prevState) => ({
      isSideMenuOpen: !prevState.isSideMenuOpen,
    }));
  };

  render() {
    const { isSideMenuOpen } = this.state;
    const { logoUrl, profilePhotoUrl, coins } = this.props;

    return (
      <div className="buyer-topnav">
        <div className="left-section">
          <Link to="/buyerhome">
            <button className="homebutton">
              <img src={logo} alt="Logo" className="topnav-logo" />
            </button>
          </Link>
        </div>
        <div className="right-section">
          <div className="coins">{coins}</div>
          <img src={dollarImage} alt="Dollar" className="coin" />
          <img
            src={profilePhotoUrl}
            alt="Profile"
            className="circular-photo"
            onClick={this.toggleSideMenu}
          />
          {isSideMenuOpen && (
            <div className="side-menu">
                <div className="menu-item">
                <Link to='/'>
                  <button className='menu-item-button'>Your orders</button>
                </Link>
              </div>
              <div className="menu-item">
                <Link to='/'>
                  <button className='menu-item-button'>Logout</button>
                </Link>
              </div>
              
              
            </div>
          )}
        </div>
      </div>
    );
  }
}
