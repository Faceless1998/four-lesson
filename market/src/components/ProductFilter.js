import React, {useState} from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "./../data/ProductData"


export default function ProductFilter(){
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const filteredData = ProductData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort( (a,b) => {
        if(sortOrder === "lowToHigh") return a.price - b.price;
        if(sortOrder === "highToLow") return b.price - a.price;
        return 0;
    });

    return(
        <>
            <div className="filter-container">

                <h1 className="title">Products List</h1>


                <div className="filters">
                    <input 
                        type="text" 
                        placeholder="Search By Name.."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                     />

                     <select value={sortOrder}>
                        <option value="">Sort By Price</option>
                        <option value="lowToHigh">Low To High</option>
                        <option value="highToLow">High To Low</option>

                     </select>
                </div>
            </div>
        </>
    )
}