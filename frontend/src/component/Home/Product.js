import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import image from "../../images/macbook.jpg";





const Product = ({ product }) => {

  
  const options={
    edit:false,
    color:"white",
    //value:product.rating,
    value:2.5,
    activeColor:"red",
    isHalf:true,
    size:window.innerWidth<500 ? 20:25,
}

  
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={image} alt={product.name} />
      <p>{product.name}</p>
      <div>
          {/* <ReactStars {...options}/> <span>({product.numOfReviews} reviews)</span> */}
          <ReactStars {...options}/> <span>(5 reviews)</span>
      </div>
      <span>{`${product.price}/=`}</span>
    </Link>
  );
};

export default Product;
