import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import HomeMain from "./routes/HomeMain";
import Checkouts from "./routes/Checkouts";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/checkout" element={<Checkouts />} />
      </Routes>
    </div>
  );
}

export default App;
