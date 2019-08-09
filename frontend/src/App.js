import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/landing" component={LandingPage} />
        </div>
    );
}

export default App;
