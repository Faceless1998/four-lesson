import React, { useState, useEffect } from "react";

const productsData = [
  { id: 1, name: "Product 1", price: "$20" },
  { id: 2, name: "Product 2", price: "$30" },
  { id: 3, name: "Product 3", price: "$40" },
  { id: 4, name: "Product 4", price: "$50" },
  { id: 5, name: "Product 5", price: "$60" },
  { id: 6, name: "Product 6", price: "$70" },
  { id: 7, name: "Product 7", price: "$80" },
  { id: 8, name: "Product 8", price: "$90" },
  { id: 9, name: "Product 9", price: "$100" },
  { id: 10, name: "Product 10", price: "$110" },
  { id: 11, name: "Product 11", price: "$120" },
  { id: 12, name: "Product 12", price: "$130" },
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsData.length / productPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <h1>Product List</h1>

        <div className="products">
          {currentProducts.map((product) => (
            <>
              <div className="product-card" key={product.id}>
                <h2> {product.name} </h2>
                <p>Price: {product.price}</p>
              </div>
            </>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => paginate(1)}> &lt;&lt; </button>
          <button onClick={() => paginate(currentPage - 1)}> &lt; </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}

          <button onClick={() => paginate(currentPage + 1)}> &gt; </button>
          <button onClick={() => paginate(totalPages)}> &gt;&gt; </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
