import React from "react";
import { NavLink } from 'react-router-dom';
import "./navigate.css";

const Navigate = () => {
  return (
    <>
      <div className="navigate" style={{ padding: "25px" }}>
        <NavLink className="navlink" exact activeClassName="selected"  to="/">TRADING FEES</NavLink>
        <NavLink className="navlink" exact activeClassName="selected"  to="/deposit">DEPOSIT AND WITHDRAWL FEES</NavLink>
        
      </div>
    </>
  );
};

export default Navigate;
