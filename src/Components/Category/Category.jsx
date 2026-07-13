import React from "react";
import Heading from "../Heading/Heading";
import TshirtCat from "../../assets/tshirt.png";
import ShirtCat from "../../assets/Shirts.png";
import JeansCat from "../../assets/Jeans.png";
import Button from "../Button/Button";

const Category = () => {

    const renderCards = category.map((card) => {
        return (
            <div className="flex-1">
                <div>
                    <img src={card.image} />
                </div>

                <div>
                    <h3> {card.title}</h3>
                    <p>{card.description}</p>
                    <Button content="See All" />
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="max-w-[1400px] mc-auto px-10 py-20">
                <Heading highlight="Shop" heading="by Category" />

                {/* Category Card */}
                <div className="flex gap-10">
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
        image: TshirtCat
    },
    {
        id: 2,
        title: 'SHIRTS',
        description: 'Explore our collection of premium shirts, style to keep you looking sharp for every occasion.',
        image: ShirtCat
    },
    {
        id: 3,
        title: ' JEANS',
        description: 'Stylish jeans crafted for the perfect fit, making them ideal for everyday wear and every occasion.',
        image: JeansCat
    },
]