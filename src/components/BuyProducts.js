import React, { Component } from 'react';
import Products from './products'; // Import the Products component
import './Buyproducts.css';

class BuyProducts extends Component {
    categories = ['Shirts', 'Pants', 'Trousers', 'under-garments', 'T-shirts','shoes','accesories','sextoys'];
    productsData = [
    {
      id:1,
      imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
      name: 'Product 1',
      size: 'Medium',
      price: '$20',
      category: 'Shirts',
    },
    {
        id:2,
        imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
        name: 'Product 1',
        size: 'Medium',
        price: '$20',
        category: 'Shirts',
      },
      {
        id:3,
        imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
        name: 'Product 1',
        size: 'Medium',
        price: '$20',
        category: 'Shirts',
      },
      {
        id:4,
        imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
        name: 'Product 1',
        size: 'Medium',
        price: '$20',
        category: 'Shirts',
      },
      {
        id:5,
        imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
        name: 'Product 1',
        size: 'Medium',
        price: '$20',
        category: 'Shirts',
      },
      {
        id:6,
          imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
          name: 'Product 1',
          size: 'Medium',
          price: '$20',
          category: 'Shirts',
        },
        {
            id:7,
          imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
          name: 'Product 1',
          size: 'Medium',
          price: '$20',
          category: 'Shirts',
        },
        {
            id:8,
          imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
          name: 'Product 1',
          size: 'Medium',
          price: '$20',
          category: 'Shirts',
        },
        {
            id:9,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: '$20',
            category: 'Shirts',
          },
        {
            id:10,
        imageUrl: 'product2.jpg',
        name: 'Product 2',
        size: 'Large',
        price: '$30',
        category: 'Pants',
        },
  ];

  render() {
    const { selectedCategoryIndex ,coins,onPurchase} = this.props;

    const selectedCategory = this.categories[selectedCategoryIndex];
    const filteredProducts = this.productsData.filter(
      (product) => product.category === selectedCategory
    );

    return (
      <div className='product-row'>
        {filteredProducts.map((product, index) => (
          <Products
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            size={product.size}
            price={product.price}
            coins={coins}
            onPurchase={onPurchase}
          />
        ))}
      </div>
    );
  }
}

export default BuyProducts;
