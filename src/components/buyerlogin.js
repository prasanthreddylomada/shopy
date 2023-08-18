import React, { Component, useEffect } from 'react';
import './buyerlogin.css';
import name_json from "C:/IIITB/FGrid/one/shopy/src/contracts/User.json";
import { Link, Navigate } from 'react-router-dom';
import logo from '../Assets/Shopy.svg';
// import Web3Provider from './web3';
import Web3 from 'web3'; 

class BuyerLogin extends Component {
  constructor(props) {
    super(props);
    // Initialize state or other setup if needed
    this.state = {
      isBuyer :false ,
      
    };
  }

  async requestAccount() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
    } else {
      throw new Error('MetaMask is not installed.');
    }
  }

  async signIn() {
    try {
        await this.requestAccount();

        if (typeof window.ethereum !== 'undefined') {
            const web3_eth = new Web3(window.ethereum);
            await window.ethereum.enable(); // Request user permission to connect

            const accounts = await web3_eth.eth.getAccounts();
            const userAddress = accounts[0];

            // console.log('accounts:',accounts);
            const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
            const web3 = new Web3(provider);

            const contractaddress = name_json.networks[5777].address;
            const abi = name_json.abi;
            const contract = new web3.eth.Contract(abi,contractaddress);
            console.log("HI",await contract.methods.isuserpresent2(userAddress).call());
            return await contract.methods.isuserpresent2(userAddress).call() ;
            

        } else {
            console.error('MetaMask not found');
        }
    } catch (error) {
        console.error('Error signing in:', error);
    }
}

  
  handleLogin = async () => {
    const checklogin = await this.signIn();console.log(checklogin);
    this.setState({ isBuyer: checklogin });
  };

  render() {
    console.log('second:',this.state.isBuyer)
    return (
      <div className="buyer-login-container">
        
        <img src={logo} alt="Metamask Logo" className="home-logo"/>
        
        {this.state.isBuyer && <Navigate to='/buyerhome'/>}
        {/* <Link to={{
          pathname: '/buyerhome',
        }}> */}
          <button className="connect-button" onClick={this.handleLogin}>login with Metamask</button>
        {/* </Link> */}
        <Link to="/sellerlogin">
          <button className="login-as-seller">Login as a seller?</button>
        </Link>
      </div>
    );
  }
}

export default BuyerLogin;
