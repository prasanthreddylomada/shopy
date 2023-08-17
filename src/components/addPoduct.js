import React, { Component } from 'react';
import './AddProduct.css'; // Import the CSS file for styling

class AddProduct extends Component {
    state = {
        image: '',
        productName: '',
        size: '',
        price: '',
        category: null,
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleCategorySelect = (categoryIndex) => {
        this.setState({ category: categoryIndex });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const categories = ['Shirts', 'Pants', 'Trousers', 'under-garments', 'T-shirts','shoes','accesories','sextoys'];

        return (
            <div className="add-product-container">
                <div className='form-contai'>
                    <h1>Add Product</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Add your product photo:</label>
                        <input
                            type="file"
                            name="image"
                            value={this.state.image}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Size:</label>
                        <select
                            name="size"
                            value={this.state.size}
                            onChange={this.handleInputChange}
                        >
                            <option value="">Select Size</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleInputChange}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={index}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                        <div>
                            <button type="submit" className="add-product-button">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct;
