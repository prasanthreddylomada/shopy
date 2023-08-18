import React, { useEffect, useState } from 'react';
import Web3 from 'web3'; // Make sure to import Web3
import name_json from "C:/IIITB/FGrid/one/shopy/src/contracts/User.json";

function Web3Provider() {
  const [web3State, setWeb3State] = useState({ web3: null, contract: null });

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      // const networkId = await web3.eth.net.getId();
      const contractaddress = name_json.networks[5777].address;
      const abi = name_json.abi;
      const contract = new web3.eth.Contract(
        abi,
        contractaddress
      );
    //   console.log(contract);
      setWeb3State({ web3, contract });
    }

    provider && template();
  }, []);

  return web3State;
}

export default Web3Provider;
