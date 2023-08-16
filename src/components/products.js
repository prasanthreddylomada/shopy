import React, { Component } from 'react';
import './products.css';
import BuyPopup from './buypopup';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
      useCoins: false,
      numberOfCoins: 0, // Add the numberOfCoins state
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  handlePurchase = () => {
    const { numberOfCoins } = this.state;
    const { onPurchase } = this.props;
    onPurchase(numberOfCoins);
    console.log('Purchase confirmed');
    console.log('Number of Coins:', this.state.numberOfCoins); // Use numberOfCoins state
    this.closePopup();
  };

  handleSliderChange = (event) => {
    this.setState({ numberOfCoins: parseInt(event.target.value) }); // Update numberOfCoins state
  };

  render() {
    const { imageUrl, name, size, price,coins } = this.props;
    const { isPopupOpen, useCoins, numberOfCoins } = this.state;

    return (
      <div className="product-container">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <div className="left-part">
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
          </div>
          <div className="right-part">
            <button className="buy-button" onClick={this.openPopup}>
              Buy
            </button>
          </div>
        </div>
        {isPopupOpen && (
          <BuyPopup
            onClose={this.closePopup}
            onPurchase={this.handlePurchase}
            numberOfCoins={numberOfCoins} // Pass numberOfCoins as a prop
            onSliderChange={this.handleSliderChange}
            coins={coins} // Pass the slider change handler
          />
        )}
      </div>
    );
  }
}

export default Products;
