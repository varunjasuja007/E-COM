import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import banner2 from "../../assets/banner2.png";


const Tshirts = () => {
    return (
        <div>
            <CategoryPage title="T-SHIRTS" bgImage={banner2} categories={['T-Shirts']} />

        </div>
    )
}

export default Tshirts;