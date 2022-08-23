import { useEffect, useState } from "react"
import { deleteShoppingCart, getDataFromDb } from "../utilities/fakedb";

const useCart = (products) =>{
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const getData = getDataFromDb();

        const shoppingCart = [];
        for(const id in getData){
            const data = products.find(product => product.id === id);
            if(data){
                data.quantity = getData[id];
                shoppingCart.push(data);
            } 
        }
        setCart(shoppingCart);
    },[products])

    const clearData = () =>{
        setCart([]);
        deleteShoppingCart();
    };
    return[cart,setCart,clearData];
}

export default useCart;
