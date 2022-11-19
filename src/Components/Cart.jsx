import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { addCart } from "../Redux/Action";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dellItem } from "../Redux/Action/index";
// import { useState } from "react-redux";
const Cart = () => {
  const [product, setProduct] = useState([]);

  const state = useSelector(() => addCart);
  const dispatch = useDispatch();
  const products = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center ">
            <div className="col-md-4">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="col-md-4">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{state.length !== 0 && state.map(products)}</>;
};

export default Cart;
