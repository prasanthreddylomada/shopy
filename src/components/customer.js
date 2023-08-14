import React, { useState } from 'react';
import './Customer.css';

const Customer = (props) => {
    const [donatePopupOpen, setDonatePopupOpen] = useState(false);
    const [donateAmount, setDonateAmount] = useState('');

    const handleDonateClick = () => {
        setDonatePopupOpen(true);
    };

    const handleDonateCancel = () => {
        setDonatePopupOpen(false);
        setDonateAmount('');
    };

    const handleDonateConfirm = () => {
        if (donateAmount) {
            console.log(`Donating ${donateAmount} to Customer ${props.customerid}`);
            setDonatePopupOpen(false);
            setDonateAmount('');
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
                                    type='number'
                                    placeholder='Enter amount'
                                    value={donateAmount}
                                    onChange={(e) => setDonateAmount(e.target.value)}
                                />
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
