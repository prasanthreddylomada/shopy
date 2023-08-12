import React, { Component } from 'react';
import './products.css'; // You can create and customize this CSS file for styling

class Products extends Component {
  render() {
    const { imageUrl, name, size, price } = this.props;

    return (
      <div className="product-container">
        <div className="product-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product-details">
          <h3>{name}</h3>
          <p>Size: {size}</p>
          <p>Price: ${price}</p>
          <button className="buy-button">Buy</button>
        </div>
      </div>
    );
  }
}

export default Products;
