import React from "react";
/////////////// Context API ////////////////////////////////////////////
// import { useStoreContext } from "../../utils/GlobalState";
/////////////// Context API ////////////////////////////////////////////
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
////////////////////////////// Redux ///////////////////////////////////
import { useDispatch } from "react-redux";
////////////////////////////// Redux ///////////////////////////////////

const CartItem = ({ item }) => {
  /////////////// Context API ////////////////////////////////////////////
  // const [, dispatch] = useStoreContext();
  /////////////// Context API ////////////////////////////////////////////

  ////////////////////////////// Redux ///////////////////////////////////
  const dispatch = useDispatch();
  ////////////////////////////// Redux ///////////////////////////////////

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
