import React, { Component } from 'react';
import './buyertopnav.css';
import dollarImage from '../Assets/dollar.png';
import { Link } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';

export default class SellerTopnav extends Component {
  state = {
    isSideMenuOpen: false,
  };

  toggleSideMenu = () => {
    this.setState((prevState) => ({
      isSideMenuOpen: !prevState.isSideMenuOpen,
    }));
  };
  render() {
    const { logoUrl, profilePhotoUrl, coins } = this.props;
    const { isSideMenuOpen } = this.state;
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
          <img src={profilePhotoUrl} alt="Profile" className="circular-photo"  onClick={this.toggleSideMenu}/>
          {isSideMenuOpen && (
            <div className="seller-side-menu">
                <div className="menu-item">
                <Link to='/'>
                  <button className='menu-item-button'>Your Products</button>
                </Link>
              </div>
              <div className="menu-item">
                <Link to='/sellerhome/addproduct'>
                  <button className='menu-item-button'>Add a Product</button>
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
