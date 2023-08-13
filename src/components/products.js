import React, { Component } from 'react';
import './products.css'; // Import your CSS file for styling
import BuyPopup from './buypopup'; // Import the BuyPopup component

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
      useCoins: false,
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  handlePurchase = () => {
    // Handle the purchase logic here
    // You can use this.props.price, this.props.name, etc. for the purchase details
    console.log('Purchase confirmed');
    this.closePopup();
  };

  handleCheckboxChange = (event) => {
    this.setState({ useCoins: event.target.checked });
  };

  render() {
    const { imageUrl, name, size, price } = this.props;
    const { isPopupOpen, useCoins } = this.state;

    return (
      <div className="product-container">
        <div className="product-image">
          <img src={imageUrl} alt={name} />
        </div>
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
            useCoins={useCoins}
            onCheckboxChange={this.handleCheckboxChange}
          />
        )}
      </div>
    );
  }
}

export default Products;
