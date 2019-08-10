import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
        </div>
    );
}

export default App;
