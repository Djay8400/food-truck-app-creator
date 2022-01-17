// Moved Stripe stuff out of App.js for the time being 
  
//   const [product, setProduct] = useState({
//     name: "MMMMM CHEESEBURGER",
//     price: 10,
//     productBy: "food truck",
//   });

//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     return fetch("http://localhost:3001/payment", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log("RESPONSE ", response);
//         const { status } = response;
//         console.log("STATUS ", status);
//       })
//       .catch((err) => console.log(err));
//   };


// component from App.js
{
    /* <StripeCheckout
    stripeKey={
      "pk_test_51KHBZnDLG1yx92htZ80kTOdpuI3muXW2c11aYwghcctZ8Av6TM3BNrzkVqrytVsPS7g11fRnPiMi5LvWbTKNCvfI00pcq75slU"
    }
    token={makePayment}
    name="Get some grub"
    amount={product.price * 100}
  >
    <div className="container">
      <button className="button is-primary">Get Some Grub!</button>
    </div>
  </StripeCheckout>; */
  }
  