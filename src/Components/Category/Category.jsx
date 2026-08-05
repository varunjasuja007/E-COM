import React from "react";
import Heading from "../Heading/Heading";
import TshirtCat from "../../assets/tshirt.png";
import ShirtCat from "../../assets/Shirts.png";
import JeansCat from "../../assets/Jeans.png";
import { Link } from "react-router-dom";


const Category = () => {

    const renderCards = category.map((card) => {
        return (
            // CARD
            <div className="flex-1 basis-[300px]" key={card.id}>
                {/*CARD IMG */}
                <div className="w-full min-h-[38vh] relative mb-25 mt-3 ">
                    <img src={card.image} className="absolute  object-contain" />
                </div>

                <div className="bg-zinc-100  p-8 rounded-xl">
                    <h3 className="text-zinc-800 text-3xl font-bold "> {card.title}</h3>
                    <p className="text-zinc-600 mt-3 mb-5">{card.description}</p>
                    <Link to={card.path} className="bg-gradient-to-b from-orange-400 to-orange-500 
        text-white px-5 py-3 mt-3 rounded-full hover:scale-105 text-lg hover:to-orange-600 transition-all duration-300ms
        cursor-pointer">
                        See All
                    </Link>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-10">
                <Heading highlight="Shop" heading="by Category" />

                {/* Category Card */}
                <div className="flex-wrap flex gap-10 md:mt-15 mt-5 ">
                    {renderCards}
                </div>
            </div>
        </section>

    )
}
export default Category;


const category = [
    {
        id: 1,
        title: ' T-SHIRTS',
        description: 'Discover comfortable, stylish,  fits, and designs, perfect for everyday wear and every occasion.',
        image: TshirtCat,
        path: '/Tshirts'
    },
    {
        id: 2,
        title: 'SHIRTS',
        description: 'Explore our collection of premium shirts, style to keep you looking sharp for every occasion.',
        image: ShirtCat,
        path: '/Shirts'
    },
    {
        id: 3,
        title: ' JEANS',
        description: 'Stylish jeans crafted for the perfect fit, making them ideal for everyday wear and every occasion.',
        image: JeansCat,
        path: '/Jeans'
    },
]