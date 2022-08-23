import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product,handleDeleteBtn} = props
    const {id,name,quantity,img,price,shipping} = product;
    return (
        <div className="review-item-container">
            <img src={img} alt="" />
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="pd-name" title={name}>{name.length > 22 ? name.slice(0, 15)+'' : name}</p>
                    <p className="pd-price">price: <span style={{color:'orange'}}>${price}</span></p>
                    <p className="pd-price">Shipping Charge: <span style={{color:'orange'}}>${shipping}</span></p>
                    <p className="pd-quantity">Quantity: {quantity}</p>
                </div>
                <div className="delete-btn-container">
                    <button onClick={()=>handleDeleteBtn(id)}> <FontAwesomeIcon className="delete-btn" icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;