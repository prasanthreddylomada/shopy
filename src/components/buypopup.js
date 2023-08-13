import React, { Component } from 'react';
import './BuyPopop.css'; // Import your CSS file for styling

class BuyPopup extends Component {
    render() {
      const { onClose, onPurchase, useCoins, onCheckboxChange } = this.props;
  
      return (
        <div className="buy-popup-overlay">
          <div className="buy-popup">
            <h2>Confirm Purchase</h2>
            <p>Use coins for the purchase?</p>
            <label>
              <input
                type="checkbox"
                checked={useCoins}
                onChange={onCheckboxChange}
              />{' '}
              Use Coins
            </label>
            <div className="button-container">
              <button onClick={onPurchase}>Proceed</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }
  }
  

export default BuyPopup;
