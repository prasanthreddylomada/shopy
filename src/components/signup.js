import React, { Component } from 'react';
import './Signup.css';
import { Navigate } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';
import Web3 from 'web3'; 
import name_json from "C:/IIITB/FGrid/one/shopy/src/contracts/User.json";

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
  async requestAccount() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
    } else {
      throw new Error('MetaMask is not installed.');
    }
  }
  async signup_fun() {
    try {
        await this.requestAccount();

        if (typeof window.ethereum !== 'undefined') {
            //eth connect
            const web3_eth = new Web3(window.ethereum);
            await window.ethereum.enable(); 
            const accounts = await web3_eth.eth.getAccounts();
            const userAddress = accounts[0];
            console.log(userAddress) ;

            //contract
            const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
            const web3 = new Web3(provider);

            const contractaddress = name_json.networks[5777].address;
            const abi = name_json.abi;
            const contract = new web3.eth.Contract(abi,contractaddress);
            console.log(this.state.email) ;
            const accounts2 = await web3_eth.eth.getAccounts();
            const user_status = await contract.methods.isUserPresent(this.state.email).call();
            const ganache_add = "0x7997a1436C3bEC2CFa80C576F1D939eC4a625835"
            if(!user_status)
            {
              const add_user = await contract.methods.addUser(userAddress, 0, this.state.name, this.state.email, this.state.phone, 0,'image').send(({ from: ganache_add, gas: '1000000' })) ;
              if(add_user){
                

                const user_details = await contract.methods.getUserDetails(this.state.email).call();
                console.log(user_details);
                

              }
              // contract.methods.yourContractFunction(inputData).send({ from: senderAddress }) ;-
              

            }

        } else {
            console.error('MetaMask not found');
        }
    } catch (error) {
        console.error('Error signing Up:', error);
    }
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
    this.signup_fun() ;
    console.log("its working priya") ;
  };

  render() {
    const { isNameValid, isPhoneValid } = this.state;
    return (
      <div className="signup-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <img src={logo} alt="Logo" className="signup-logo" />
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
