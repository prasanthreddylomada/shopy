import React, { Component } from 'react';
import './BuyPopop.css';

class BuyPopup extends Component {
  render() {
    const { onClose, onPurchase, numberOfCoins, onSliderChange ,coins,price} = this.props;

    return (
      <div className="buy-popup-overlay">
        <div className="buy-popup">
          <h2>Confirm Purchase</h2>
          <p>Select the number of coins:</p>
          <input
            type="range"
            min="0"
            max={price*0.3}
            value={numberOfCoins}
            onChange={onSliderChange}
          />
          <p>{numberOfCoins} Coins</p>
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
