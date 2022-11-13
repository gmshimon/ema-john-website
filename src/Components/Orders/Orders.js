import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
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
    const rest = cart.filter(pd=>pd._id!==id)
    setCart(rest);
    removeFromDb(id);
  }

  return (
    <div className="order-container">
      <div style={{marginTop:'70px', marginLeft:'300px'}}>
        {cart.map((product) => (
          <ReviewItem 
            key={product._id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
        ></ReviewItem>
        ))}
      </div>
      <div>
            <Cart cart={cart} clearData={clearData}>
            <Link to="/inventory">
              <button className="btn-preview">
                <p>
                  Check Out{" "}
                  <FontAwesomeIcon
                    style={{ marginLeft: "5px" }}
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </p>
              </button>
            </Link>
            </Cart>
        </div> 
    </div>
  );
};

export default Orders;
