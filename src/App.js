import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(state=>state.user.currentUser) ;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register/>}
        </Route>
        <Route path="/signin">
          {user ? <Redirect to="/" /> : <Signin/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
