import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
/////////////// Context API ////////////////////////////////////////////
import { useStoreContext } from "../../utils/GlobalState";
/////////////// Context API ////////////////////////////////////////////
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
////////////////////////////// Redux ///////////////////////////////////
// import { useDispatch, useSelector } from "react-redux";
////////////////////////////// Redux ///////////////////////////////////

function ProductList() {
  /////////////// Context API ////////////////////////////////////////////
  const [state, dispatch] = useStoreContext();
  /////////////// Context API ////////////////////////////////////////////

  ////////////////////////////// Redux ///////////////////////////////////
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  ////////////////////////////// Redux ///////////////////////////////////

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.productImage}
              name={product.menuItem}
              price={product.price}
              description={product.menuDescription}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
