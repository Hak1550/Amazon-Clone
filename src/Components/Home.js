import React from "react";
import HomeBackground from "../Images/Home-Back.jpg";
import "../Css/Home.css";
import Product from "../Components/Product.js";
import ProductImg from "../Images/product-img.jpg";
import Juicer from "../Images/juicer.jpg";
import Bag from "../Images/Bag.jpg";
import Machine from "../Images/machine.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={HomeBackground} className="homeBackground" />
        <div className="product-row">
          <Product title="Juicer" image={Juicer} price="9.99" rating={5} />
          <Product title="Bag" image={Bag} price="2.50" rating={3} />
          <Product title="Machine" image={Machine} price="35.50" rating={4} />
        </div>
        <div className="product-row">
          <Product title="Juicer" image={ProductImg} price="9.99" rating={4} />
          <Product title="Juicer" image={ProductImg} price="9.99" rating={5} />
          <Product title="Juicer" image={ProductImg} price="9.99" rating={3} />
        </div>
        <div className="product-row">
          <Product title="Machine" image={Machine} price="15.50" rating={2} />
          <Product title="Machine" image={Machine} price="20.50" rating={3} />
          <Product title="Machine" image={Machine} price="18.75" rating={5} />
          <Product title="Machine" image={Machine} price="5.00" rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
