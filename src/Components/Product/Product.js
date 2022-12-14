import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const{handleAddToCart}=props;
    const {_id,name,img,ratings,seller,price} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="info-container">
                <div>
                    <p className="product-name">{name}</p>
                    <p className="product-price">Price: ${price}</p>
                </div>
                <div className="product-info">
                    <p className="manufacturer">Manufacturer: {seller}</p>
                    <p className="ratings">Rating: {ratings} star</p>
                </div>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className="btn-cart">
                <p>Add Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;