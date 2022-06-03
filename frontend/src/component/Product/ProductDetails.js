import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productActions";
import image from "../../images/macbook.jpg";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  /////match.params.id doesnot work
  const { id } = useParams();
  const dispatch = useDispatch();


  
  const { product, details, error } = useSelector(
    (state) => state.productDetails
  );

  ////review star options
  const options = {
    edit: false,
    color: "white",
    //value: product.rating,
    value: 2.5,
    activeColor: "red",
    isHalf: true,
    size: window.innerWidth < 500 ? 20 : 25,
  };

  console.log("hello " + id);
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <img className="CarouselImage" src={image} alt="image111" />
          {/* {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  //key={item.url}
                  src={image}
                  alt={`${i} Slide`}
                /> 
              ))} */}
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p >Product # {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span className="detailsBlock-2-span">
              {" "}
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`${product.price}/=`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input resdOnly type="number" value="1" />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock-4">
            Description : <p>{product.description}</p>
          </div>

          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetails;
