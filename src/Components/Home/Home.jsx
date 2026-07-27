import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Product from "../Products/Product";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";

const Home = () => {
    return (
        <div>

            <Navbar />
            <Hero />
            <Category />
            <Values />
            <Product />
            <Discount />
            <Process />

        </div>
    )
}

export default Home;