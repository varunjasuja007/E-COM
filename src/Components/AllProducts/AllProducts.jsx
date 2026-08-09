import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgAll from "../../assets/BgAll.png";

const AllProducts = () => {
    return (
        <div>
            <CategoryPage title="ALL PRODUCTS" bgImage={BgAll} categories={['All']} />
        </div>
    )
}

export default AllProducts;