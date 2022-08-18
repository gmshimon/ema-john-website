import {  faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let quantity = 0;
    let totalPrice = 0;
    let shippingPrice = 0;
    let grandTotalPrice = 0;
    let tax = 0;
    
    cart.forEach(c=>{
        quantity += c.quantity;
        totalPrice += (c.price*c.quantity);
        shippingPrice += c.shipping;
    });

    tax = totalPrice * 0.1;
    grandTotalPrice = totalPrice + shippingPrice + tax;

    return (    
        <div className="cart">
            <h5 style={{paddingTop:'28px'}}>Order Summary</h5>
            <div className="details-container">
                <p className="details">Selected Items: {quantity}</p>
                <p className="details">Total Price: ${totalPrice}</p>
                <p className="details">Total Shipping Charge: ${shippingPrice}</p>
                <p className="details">Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotalPrice.toFixed(2)}</h5>
            </div>
            <div className="btn-grp">
                <button className="btn-clear">
                    <p>Clear <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faTrash}></FontAwesomeIcon></p>
                    
                </button>
                <button className="btn-preview">
                    <p>Preview Order <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight}></FontAwesomeIcon></p>
                    
                </button>
            </div>

        </div>
    );
};


export default Cart;