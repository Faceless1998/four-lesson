import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Products from "./../../data/Products";

function ProductDetails() {
  const { id } = useParams();
  const product = Products.find((p) => p.id === id);

  return (
    <>
      <div className="product-details">
        <Link to="/">Back</Link>
        <h1> {product.name} </h1>
        <img src={product.image} alt={product.name} width="400" />
        <p> ${product.price} </p>
      </div>
    </>
  );
}

export default ProductDetails;