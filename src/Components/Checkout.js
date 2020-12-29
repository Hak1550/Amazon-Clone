import React from "react";
import "../Css/Checkout.css";
import CheckAdd from "../Images/Checkout-add.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <img src={CheckAdd} />
      <div className="checkout-Left"></div>
      <div className="checkout-Right"></div>
    </div>
  );
}

export default Checkout;
