import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men {menu === "mens" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="womens">Women {menu === "womens" ? <hr /> : <></>}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="kids">Kids {menu === "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
