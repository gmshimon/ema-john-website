import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getDataFromDb,
} from "../../utilities/fakedb";
import useProduct from "../../useProducts/UseProducts";
import useCart from "../../UseCart/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart, clearData] = useCart(products);
  const [pageCount,setPagecount] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:5000/productCount')
    .then(res=>res.json())
    .then(data=>{
      const count = data.count;
      const pages = Math.ceil(count/10);
      setPagecount(pages);
    })
  },[])

  const handleAddToCart = (product) => {
    let newCart = [];
    const existingProduct = cart.find((p) => p._id === product._id);
    if (!existingProduct) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((p) => p._id !== product._id);
      existingProduct.quantity = existingProduct.quantity + 1;
      newCart = [...rest, existingProduct];
    }
    addToDb(product._id);
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
          
      <div>
        <Cart cart={cart} clearData={clearData}>
          <Link to="/orders">
            <button className="btn-preview">
              <p>
                Preview Order{" "}
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </p>
            </button>
          </Link>
        </Cart>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
          {
            [...Array(pageCount).keys()]
            .map(number=><button className="pageButton">{number+1}</button>)
          }
          </div>
    </div>
  );
};

export default Shop;
