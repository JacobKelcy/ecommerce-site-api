import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/">
              <h1 className="comp-logo">PERIC MILJAN</h1>
            </Link>
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                nesciunt quos sint, illo at quo commodi Quaerat nesciunt quos
                sint, illo at quo commodi voluptatum, iusto libero itaque unde
                sed magnam veniam quod ex laborum.
              </p>
            </div>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
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
            <h3>Follow Us</h3>
            <div className="right">
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
        <div className="row">
          <div className="col">
            <hr />
            <div className="copyRights">
              <div className="copy">
                &copy; 2022. All Rights Reserved. Powered by Miljan Peric.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
