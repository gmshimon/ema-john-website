import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';         
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) => {
        addToDb(product.id);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div> 
        </div>
    );
};

export default Shop;