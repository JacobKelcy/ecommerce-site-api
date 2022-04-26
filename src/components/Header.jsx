import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="top row">
          <div className="col">
            <div className="topDiv">
              <i className="fa fa-phone"></i>
              <span> +381/000-000-0</span>
            </div>
            <div className="topDiv">
              <i className="fa fa-envelope"></i>
              <span> wewe@gmail.com</span>
            </div>
          </div>
          <div className="col">
            <div className="topDiv">
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="middle row">
          <div className="col">
            <a href="/">
              <h1 className="comp-logo">PERIC MILJAN</h1>
            </a>
          </div>
          <div className="col">
            <div className="nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="buttons">
              <a href="/">
                <i className="fa fa-sign-in"></i>Login
              </a>
              <a href="/">
                <i className="fa fa-user-plus"></i> Register
              </a>
              <a href="/">
                <i className="fa fa-shopping-cart"></i>Cart(0)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
