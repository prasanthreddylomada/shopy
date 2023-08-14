import React from 'react';
import './sellerproducts.css';

const SellerProduct = ({ productId, imageUrl, price, name, size, sales ,onClick}) => {
  return (
    <button className="seller-product" onClick={onClick}>
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>Size: {size}</p>
        <p>Price: ${price}</p>
        <p>Sales: {sales}</p>
      </div>
    </button>
  );
};

export default SellerProduct;
