import React, { useState, useEffect } from "react";

const productsData = Array.from( { length: 101 }, (_, index) => ({
    id: index+1,
    name: `product ${index+1}`,
    price: `$${ (index+1) * 10 }`
}))
 
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsData.length / productPerPage);

  const paginate = () => {
    const pages = [];
    const maxVisiblePage = 3;

    if( totalPages <=7){
      return Array.from( {length: totalPages }, (_, index) => index+1)
    }

    pages.push(1);

    if(currentPage > maxVisiblePage){
      pages.push("...")
    }

    const startPage = Math.max( 2, currentPage - 1 );
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for(let i = startPage; i<=endPage; i++){
      pages.push(i);
    }

    if(currentPage < totalPages - maxVisiblePage + 1 ){
      pages.push("...");
    }

    pages.push(totalPages)

    return pages;

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

          {
            paginate().map( (page, index) => (
              page === "..." 
              ?
              ( <span key={index}> {page} </span> )
              :
              ( <button onClick={() => setCurrentPage(page)}> {page} </button> )
            ) )
          }

          <button onClick={() => paginate(currentPage + 1)}> &gt; </button>
          <button onClick={() => paginate(totalPages)}> &gt;&gt; </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;