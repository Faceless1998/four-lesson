import React from "react";
import Products from "./../../data/Products";
import Product from "../../components/Product";

function ProductList() {
    return(
        <>
            <div className="product-list">
                <h1>Our Product</h1>

                <div className="grid">
                    
                    {
                        Products.map( product => (
                            <Product product={product} key={product.id} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
export default ProductList