import React from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import FTFlogo from "../assets/FTFlogo.png";

const ExamplePage = () => {

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default ExamplePage;

//Reference for cards

// {/* <section className="hero home-dev__hero is-small is-bold">
//         <div className="hero-head">
//           <img src={FTFlogo} alt="food-truck-fix logo" width={"300px"}></img>
//           <h4>(YOUR LOGO HERE ^)</h4>
//         </div>
//         <div className="hero-body">
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={burger} alt="foodTruck" />
//                 <p>Burger</p>
//               </Link>
//               <div>
//                 <span>$9.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={nachos} alt="foodTruck" />
//                 <p>Nachos</p>
//               </Link>
//               <div>
//                 <span>$7.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={fries} alt="foodTruck" />
//                 <p>Fries</p>
//               </Link>
//               <div>
//                 <span>$5.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={eggroll} alt="foodTruck" />
//                 <p>Eggrolls</p>
//               </Link>
//               <div>
//                 <span>$6.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={fruitCup} alt="foodTruck" />
//                 <p>Fruit Cup</p>
//               </Link>
//               <div>
//                 <span>$7.59</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={soda} alt="foodTruck" />
//                 <p>Soda</p>
//               </Link>
//               <div>
//                 <span>$2.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={water} alt="foodTruck" />
//                 <p>Water</p>
//               </Link>
//               <div>
//                 <span>$1.50</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//           <div className="container has-text-centered">
//             <div className="card px-1 py-1">
//               <Link to={`/products/${_id}`}>
//                 <img src={chickenTenders} alt="foodTruck" />
//                 <p>Chicken Tenders</p>
//               </Link>
//               <div>
//                 <span>$10.99</span>
//               </div>
//               <button onClick={addToCart}>Add to cart</button>
//             </div>
//           </div>
//         </div>
//       </section> */}