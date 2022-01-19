import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';


import StripeCheckout from 'react-stripe-checkout';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  const [product, setProduct] = useState({
    name: 'MMMMM CHEESEBURGER',
    price: 10,
    productBy: 'food truck',
  });

  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <i className="uil uil-shopping-cart-alt"></i>
      </div>
    );
  }

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch('http://localhost:3001/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('RESPONSE ', response);
        const { status } = response;
        console.log('STATUS ', status);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>
                <StripeCheckout
                  stripeKey={
                    'pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU'
                  }
                  token={makePayment}
                  name="Get some grub"
                  amount={product.price * 100}
                >
                  <div className="container">
                    <button className="button is-primary">
                      Get Some Grub!
                    </button>
                  </div>
                </StripeCheckout>
              </button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>Cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;
