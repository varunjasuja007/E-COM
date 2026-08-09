import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import banner3 from "../../assets/banner3.png";

const Jeans = () => {
    return (
        <div>
            <CategoryPage title="JEANS" bgImage={banner3} categories={['Jeans']} />
        </div>
    )
}

export default Jeans;