import React from "react";
import "../Css/product.css";
import Button from "@material-ui/core/Button";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product-title">{title}</div>

      <div className="product-price">
        <small>$ </small>
        {price}
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐️</p>
          ))}
      </div>
      <img className="product-image" src={image} />
      <Button variant="contained" className="AddBtn">
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
