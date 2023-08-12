import React, { Component } from 'react';
import Products from './products'; // Import the Products component

class BuyProducts extends Component {
  productsData = [
    {
      imageUrl: 'product1.jpg',
      name: 'Product 1',
      size: 'Medium',
      price: '$20',
      category: 'Shirts',
    },
    {
      imageUrl: 'product2.jpg',
      name: 'Product 2',
      size: 'Large',
      price: '$30',
      category: 'Pants',
    },
    // Add more products here...
  ];

  render() {
    const { selectedCategoryIndex } = this.props;

    const selectedCategory = this.productsData[selectedCategoryIndex]?.category;
    const filteredProducts = this.productsData.filter(
      (product) => product.category === selectedCategory
    );

    return (
      <div>
        {filteredProducts.map((product, index) => (
          <Products
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            size={product.size}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

export default BuyProducts;
