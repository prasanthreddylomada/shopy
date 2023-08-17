import React, { useState } from 'react';
import './Customer.css';

const Customer = (props) => {
    const [donatePopupOpen, setDonatePopupOpen] = useState(false);
    const [donateAmount, setDonateAmount] = useState(0);

    const handleDonateClick = () => {
        setDonatePopupOpen(true);
    };

    const handleDonateCancel = () => {
        setDonatePopupOpen(false);
        setDonateAmount(0);
    };

    const handleDonateConfirm = () => {
        if (donateAmount > 0) {
            console.log(`Donating ${donateAmount} to Customer ${props.customerid}`);
            setDonatePopupOpen(false);
            props.setcoins(donateAmount);
            setDonateAmount(0);
        }
    };

    return (
        <div className='customer-container' key={props.customerid}>
            <div className='customer-image'>
                <img src={props.imageurl} alt={`Customer ${props.customerid}`} />
            </div>
            <div className='customer-details'>
                <h3>Customer {props.customerid}</h3>
                <p>Purchases: {props.purchases}</p>
                <p>Total Cost: ${props.totalcost}</p>
                <button className='donate-button' onClick={handleDonateClick}>Donate</button>
                {donatePopupOpen && (
                    <div className='donate-popup-overlay'>
                        <div className='donate-popup'>
                            <h3>Donate to Customer {props.customerid}</h3>
                            <div className='donate-question'>
                                <p>Select the amount to be donated:</p>
                                <input
                                    type='range'
                                    min={0}
                                    max={100}
                                    value={donateAmount}
                                    onChange={(e) => setDonateAmount(parseInt(e.target.value))}
                                />
                                <p>${donateAmount}</p>
                            </div>
                            <div className='donate-buttons'>
                                <button className='popup-button' onClick={handleDonateConfirm}>Donate</button>
                                <button className='popup-button' onClick={handleDonateCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Customer;
