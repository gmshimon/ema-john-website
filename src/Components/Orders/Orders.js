import React from "react";
import useCart from "../../UseCart/useCart";
import useProduct from "../../useProducts/UseProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./ORder.css";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart,clearData] = useCart(products);

  const handleDeleteBtn = (id) => {
    const rest = cart.filter(pd=>pd.id!==id)
    setCart(rest);
    removeFromDb(id);
  }

  return (
    <div className="order-container">
      <div style={{marginTop:'70px', marginLeft:'300px'}}>
        {cart.map((product) => (
          <ReviewItem 
            key={product.id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
        ></ReviewItem>
        ))}
      </div>
      <div>
            <Cart cart={cart} clearData={clearData}></Cart>
        </div> 
    </div>
  );
};

export default Orders;
