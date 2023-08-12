import React, { Component } from 'react';
import './Signup.css';
import { Navigate } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      verified: false,
      isNameValid: true,
      isPhoneValid: true,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Validate name (accept alphabets only)
    if (name === 'name') {
      const isNameValid = /^[a-zA-Z\s]*$/.test(value);
      this.setState({
        [name]: value,
        isNameValid,
      });
    }
    // Validate phone number (accept numbers only)
    else if (name === 'phone') {
      const isPhoneValid = /^[0-9]*$/.test(value);
      this.setState({
        [name]: value,
        isPhoneValid,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Perform any actions you need, such as sending data to a server
    if (this.state.isNameValid && this.state.isPhoneValid) {
      this.setState({ verified: true });
      console.log('Form submitted:', this.state);
    }
  };

  render() {
    const { isNameValid, isPhoneValid } = this.state;

    return (
      <div className="signup-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className={`input-group ${isNameValid ? '' : 'invalid'}`}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className={`input-group `}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className={`input-group ${isPhoneValid ? '' : 'invalid'}`}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="phone number"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="button-container">
              <button className="verify-button" type="submit">
                Verify with Metamask
              </button>
            </div>
          </form>
        </div>
        {this.state.verified && <Navigate to="/" />}
      </div>
    );
  }
}

export default Signup;
