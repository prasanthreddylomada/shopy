import React, { useState, useEffect } from 'react'; // Added import for useState and useEffect
import './products.css';
import BuyPopup from './buypopup';
import Web3Provider from './web3';

function Products(props) { // Changed from class component to functional component
  // Replaced this.state with useState for state management
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [useCoins, setUseCoins] = useState(false);
  const [numberOfCoins, setNumberOfCoins] = useState(0);
  const web3State = Web3Provider();
 ;


  // Replaced class methods with functional component syntax
  const openPopup = () => {
    setPopupOpen(true);
  };
  
  const closePopup = () => {
    setPopupOpen(false);
  };

  // handlePurchase = () => {
  //   const { numberOfCoins } = this.state;
  //   const { onPurchase,onSetCoins } = this.props;
  //   // onPurchase(numberOfCoins);
  //   onSetCoins(100);
  //   console.log('Purchase confirmed');
  //   console.log('Number of Coins:', this.state.numberOfCoins); // Use numberOfCoins state
  //   this.closePopup();
    
  const handlePurchase = async () => {
    console.log('Purchase Started');
    try {
      if (!web3State.contract) {
        console.error('Contract instance not available.');
        return;
      }

      const num2 = await web3State.contract.methods.getFive().call();
      const num = parseInt(num2.toString());  
      setNumberOfCoins(num);
  
      console.log('Number of Coins:', num);
      closePopup();
    } catch (error) {
      console.error('Error while calling contract function:', error);
    }
    console.log('Purchase Completed');
  };

  // useEffect(() => {
    // console.log('Number of Coins:', numberOfCoins);
  // }, [numberOfCoins]);

  const handleSliderChange = (event) => {
    setNumberOfCoins(parseInt(event.target.value));
  };

  const { imageUrl, name, size, price, coins } = props;

    return (
      <div className="product-container">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <div className="left-part">
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Price: {price}</p>
          </div>
          <div className="right-part">
            <button className="buy-button" onClick={openPopup}>
              Buy
            </button>
          </div>
        </div>
        {isPopupOpen && (
          <BuyPopup
            onClose={closePopup}
            onPurchase={handlePurchase}
            numberOfCoins={numberOfCoins}
            onSliderChange={handleSliderChange}
            coins={coins} 
            price={price}
          />
        )}
      </div>
    );
  
}

export default Products;
