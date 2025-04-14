import React from "react";
import { Link } from "react-router-dom";

function Product({product}) {
    return(
        <>
            <div className="card">
                <img src={product.image} alt={product.name} width="300" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Link to={`/cards/${product.id}`}  > Learn More </Link>
            </div>
        </>
    )
}

export default Product;