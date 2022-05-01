import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faSignIn,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const state = useSelector((state) => state.HandleCart);

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
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagramSquare} />
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
                Cart({state.length})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
