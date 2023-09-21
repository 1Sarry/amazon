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
  useLocation,
} from "react-router-dom";
import HomeMain from "./routes/HomeMain";
import Checkouts from "./routes/Checkouts";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import Footer from "./Components/Footer/Footer";
import TopSeller from "./Components/TopSeller/TopSeller";
import Deals from "./Components/Deals/Deals";
import MoreProd from "./Components/MoreProducts/MoreProd";

const promise = loadStripe(
  "pk_test_51NpAh5ISr9Uv34T9G3376h3HrMEEpj9wgTAwngquWq9w7gSqQX7EsGDbhygGMSOa61quT8vgxO0KHZNcsyxkiAaK00LFmo4HDf"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >>>", authUser)
      if (authUser) {
        // the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkouts />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div id="top">
                <Header />
              </div>
              <HomeMain />
              <TopSeller />
              <Deals />
              <MoreProd />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
