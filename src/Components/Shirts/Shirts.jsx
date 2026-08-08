import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";

import banner from "../../assets/banner1.png";

const Shirts = () => {
    return (
        <div>
            <CategoryPage title="SHIRTS" bgImage={banner} />
        </div>
    );
};

export default Shirts;