import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
