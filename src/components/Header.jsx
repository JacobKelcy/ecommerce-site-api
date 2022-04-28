import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faSignIn,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="top row">
          <div className="col">
            <div className="topDiv">
              <FontAwesomeIcon icon={faPhone} />
              <span> +381/000-000-0</span>
            </div>
            <div className="topDiv">
              <FontAwesomeIcon icon={faEnvelope} />
              <span> wewe@gmail.com</span>
            </div>
          </div>
          <div className="col">
            <div className="topDiv">
              <Link to="/">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="middle row">
          <div className="col">
            <Link to="/">
              <h1 className="comp-logo">PERIC MILJAN</h1>
            </Link>
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="buttons">
              <Link to="/login">
                <FontAwesomeIcon icon={faSignIn} />
                Login
              </Link>
              <Link to="/register">
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart(0)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
