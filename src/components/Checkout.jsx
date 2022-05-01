import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Checkout() {
  const state = useSelector((state) => state.HandleCart);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;

    return (
      <div className="totalContent">
        <p>{item.title}</p>
        <span>${item.price}</span>
      </div>
    );
  };
  return (
    <>
      <div className="checkoutItems container">
        <div className="row">
          <div className="col">
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="formGroup">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
            <div className="formGroup">
              <Link to="/order" className="checkout">
                Checkout
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="totalCart">
              <h2>
                Your Cart <span>{state.length}</span>
              </h2>
              <div className="totalInfo">
                <div className="totalInfo">{state.map(itemList)}</div>
              </div>
              <div className="total">
                <p>TOTAL:</p>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
