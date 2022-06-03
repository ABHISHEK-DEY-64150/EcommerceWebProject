import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/Metadata";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

// const product = {
//   name: "MacBook",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "$1200",
//   _id: "sani",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="E-commerce" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find your desired products below</h1>

        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products && products.map((product,key) => <Product product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
