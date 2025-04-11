import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
    </div>
  );
}
