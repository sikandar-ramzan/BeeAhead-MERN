import "./App.css";
// Importing Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Option from "./components/Option";
import FoodOrderPage from "./components/FoodOrderPage";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import AddMenu from "./components/AddMenu";

import BookHallsPage from "./components/BookHallsPage";
import Marquee from "./components/Marquee";

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
            <Route path="/menu/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            {/* Hall Booking Components */}
            <Route path="/book-halls" component={BookHallsPage} />
            <Route path="/marquee" component={Marquee} />
            {/* Adding Menu Components */}
            <Route path="/add-menu" component={AddMenu} />
          </Switch>
        </div>
      </Router>
      <div className="footer">
        <p>© 2021 BeeAhead All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
