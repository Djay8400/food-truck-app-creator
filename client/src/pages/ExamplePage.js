import React from "react";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import FTFlogo from "../assets/FTFlogo.png";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import truckImage from "../assets/foodtruck.jpg";
import nachos from "../assets/nachosPic.jpg";
import burger from "../assets/burgerPic.jpg";
import chickenTenders from "../assets/chickenStripPic.jpg";
import soda from "../assets/sodaPic.jpg";
import water from "../assets/waterBottlePic.jpg";
import eggroll from "../assets/eggrollPic.jpg";
import fruitCup from "../assets/fruitCupPic.jpg";
import fries from "../assets/fries.jpg";

export default function ExamplePage(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div>
      <section className="hero home-dev__hero is-small is-bold">
        <div className="hero-head">
          <img src={FTFlogo} alt="food-truck-fix logo" width={"300px"}></img>
          <h4>(YOUR LOGO HERE ^)</h4>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={burger} alt="foodTruck" />
                <p>Burger</p>
              </Link>
              <div>
                <span>$9.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={nachos} alt="foodTruck" />
                <p>Nachos</p>
              </Link>
              <div>
                <span>$7.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={fries} alt="foodTruck" />
                <p>Fries</p>
              </Link>
              <div>
                <span>$5.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={eggroll} alt="foodTruck" />
                <p>Eggrolls</p>
              </Link>
              <div>
                <span>$6.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={fruitCup} alt="foodTruck" />
                <p>Fruit Cup</p>
              </Link>
              <div>
                <span>$7.59</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={soda} alt="foodTruck" />
                <p>Soda</p>
              </Link>
              <div>
                <span>$2.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={water} alt="foodTruck" />
                <p>Water</p>
              </Link>
              <div>
                <span>$1.50</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
          <div className="container has-text-centered">
            <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img src={chickenTenders} alt="foodTruck" />
                <p>Chicken Tenders</p>
              </Link>
              <div>
                <span>$10.99</span>
              </div>
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
      <Cart />
    </div>
  );
}
