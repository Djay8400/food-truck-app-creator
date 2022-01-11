// import logo from "./logo.svg";
import "./App.css";
import foodTruck from "./assets/foodtruck.jpg";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <img src={foodTruck} className="truck" alt="logo" />
    </div>
  );
}

export default App;
