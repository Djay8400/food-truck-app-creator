// import logo from "./logo.svg";
import "./App.css";
import foodTruck from "./assets/foodtruck.jpg";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={foodTruck} className="truck" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
