import React, { Component } from 'react';
import './buyercategorynav.css'; // Import your CSS file for styling

class BuyerCategoryNav extends Component {
  render() {
    const categories = ['Shirts', 'Pants', 'Trousers', 'Inners', 'T-shirts'];
    const { selectedCategoryIndex, onSelectCategory } = this.props;

    return (
      <div className="buyer-category-nav">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${index === selectedCategoryIndex ? 'selected' : ''}`}
            onClick={() => onSelectCategory(index)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
}

export default BuyerCategoryNav;
