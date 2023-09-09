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
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const [{}, dispatch] = useStateValue();
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
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomeMain />
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
