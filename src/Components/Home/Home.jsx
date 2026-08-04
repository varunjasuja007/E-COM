import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Product from "../Products/Product";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Tshirts from "../T-Shirts/Tshirts";

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
            <Testimonials />
            <Footer />
            <Tshirts />

        </div>
    )
}

export default Home;