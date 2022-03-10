import React from "react";
import Navbar from "./components/Navbar";
import Table  from "./components/Table";
import Deposit from "./components/Deposit";
import {BrowserRouter, Switch, Route } from "react-router-dom"
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Navigate/>
    <Switch>
        <Route exact path="/" component={Table}  />
        <Route exact path="/deposit"  component={Deposit}/>
      </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
