// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Importing Components
import Nav from "./customer components/Nav";
import Home from "./customer components/Home";
import About from "./customer components/About";
import Contact from "./customer components/Contact";
import Option from "./customer components/Option";
import FoodOrderPage from "./customer components/FoodOrderPage";
import Menu from "./customer components/Menu";
import Checkout from "./customer components/Checkout";
import Cart from "./customer components/Cart";
import AddMenu from "./customer components/AddMenu";

import BookHallsPage from "./customer components/BookHallsPage";
import Marquee from "./customer components/Marquee";

import Login from "./login signup components/Login";
import Signup from "./login signup components/Signup";

import newLogin from "./customer components/Login";
import newSignup from "./customer components/Signup";

// Importing Other Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/option" component={Option} />

            {/* Food Order Components */}
            <Route path="/food-order" component={FoodOrderPage} />
            <Route path="/menu" component={Menu} />
            {/* <Route path="/menu/cart" component={Cart} /> */}
            <Route path="/checkout" component={Checkout} />

            {/* Hall Booking Components */}
            <Route path="/book-halls" component={BookHallsPage} />
            <Route path="/marquee" component={Marquee} />
            <Route path="/checkout" component={Checkout} />

            {/* Adding Menu Components */}
            <Route path="/add-menu" component={AddMenu} />

            {/* Adding Login/Signup Components */}
            <Route path="/login" component={Login} />
            <Route path="/newlogin" component={newLogin} />
            <Route path="/signup" component={Signup} />
            <Route path="/newsignup" component={newSignup} />
          </Switch>
        </div>
      </Router>
      <div className="custom-footer">
        <p>© 2021 BeeAhead All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
