import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';         
import { addToDb, deleteShoppingCart, getDataFromDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    const clearData = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const getData = getDataFromDb();
        const shoppingCart=[];
        for(const id in getData) {
            const data = products.find(product => product.id === id)
            if(data!== undefined){
                data.quantity = getData[id];
                shoppingCart.push(data);
            }
        }
        setCart(shoppingCart);
        console.log(shoppingCart)
    },[products]);

    const handleAddToCart = (product) => {

        let newCart = [];

        const existingProduct = cart.find(p=>p.id === product.id);
        if(!existingProduct){
            product.quantity = 1;
            newCart = [...cart,product];
        }
        else{
            const rest = cart.filter(p=>p.id !== product.id);
            existingProduct.quantity = existingProduct.quantity+1;
            newCart = [...rest,existingProduct];
        }
        addToDb(product.id);
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
                <Cart cart={cart} clearData={clearData}></Cart>
            </div> 
        </div>
    );
};

export default Shop;