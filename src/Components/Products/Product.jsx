import React, { useState } from 'react'
import Heading from '../Heading/Heading';



const Product = () => {

    const categories = ['All', 'T-Shirts', 'Shirts', 'Jeans'];
    const [activeTab, setActiveTab] = useState('All')

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Product" />

                {/* Tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {categories.map(category => {
                        return (
                            <button key={category}
                                className={`px-5 py-2 text-lg rounded-full cursor-pointer font-semi-bold
                              ${activeTab == category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-200'}`}
                                onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Product;



export const products = [
    {
        id: 1,
        title: "Classic White T-Shirt",
        price: 19.99,
        category: "T-Shirts",
        image: product1,
    },
    {
        id: 2,
        title: "Black Round Neck T-Shirt",
        price: 21.99,
        category: "T-Shirts",
        image: product2,
    },
    {
        id: 3,
        title: "Oversized Graphic T-Shirt",
        price: 24.99,
        category: "T-Shirts",
        image: product3,
    },
    {
        id: 4,
        title: "Blue Cotton T-Shirt",
        price: 18.99,
        category: "T-Shirts",
        image: product4,
    },
    {
        id: 5,
        title: "Green Printed T-Shirt",
        price: 22.99,
        category: "T-Shirts",
        image: product5,
    },
    {
        id: 6,
        title: "Grey Polo T-Shirt",
        price: 25.99,
        category: "T-Shirts",
        image: product6,
    },
    {
        id: 7,
        title: "Navy Basic T-Shirt",
        price: 20.99,
        category: "T-Shirts",
        image: product7,
    },
    {
        id: 8,
        title: "Red Casual T-Shirt",
        price: 19.49,
        category: "T-Shirts",
        image: product8,
    },

    {
        id: 9,
        title: "Formal White Shirt",
        price: 34.99,
        category: "Shirts",
        image: product9,
    },
    {
        id: 10,
        title: "Sky Blue Shirt",
        price: 36.99,
        category: "Shirts",
        image: product10,
    },
    {
        id: 11,
        title: "Black Slim Fit Shirt",
        price: 38.99,
        category: "Shirts",
        image: product11,
    },
    {
        id: 12,
        title: "Checked Casual Shirt",
        price: 35.49,
        category: "Shirts",
        image: p12,
    },
    {
        id: 13,
        title: "Striped Cotton Shirt",
        price: 37.99,
        category: "Shirts",
        image: p13,
    },
    {
        id: 14,
        title: "Olive Green Shirt",
        price: 39.99,
        category: "Shirts",
        image: p14,
    },
    {
        id: 15,
        title: "Denim Shirt",
        price: 42.99,
        category: "Shirts",
        image: p15,
    },
    {
        id: 16,
        title: "Linen Beige Shirt",
        price: 44.99,
        category: "Shirts",
        image: p16,
    },

    {
        id: 17,
        title: "Blue Slim Fit Jeans",
        price: 49.99,
        category: "Jeans",
        image: p17,
    },
    {
        id: 18,
        title: "Black Skinny Jeans",
        price: 51.99,
        category: "Jeans",
        image: p18,
    },
    {
        id: 19,
        title: "Regular Fit Denim Jeans",
        price: 47.99,
        category: "Jeans",
        image: p19,
    },
    {
        id: 20,
        title: "Light Wash Jeans",
        price: 53.99,
        category: "Jeans",
        image: p20,
    },
    {
        id: 21,
        title: "Dark Blue Jeans",
        price: 54.99,
        category: "Jeans",
        image: p21,
    },
    {
        id: 22,
        title: "Ripped Denim Jeans",
        price: 56.99,
        category: "Jeans",
        image: p22,
    },
    {
        id: 23,
        title: "Grey Straight Fit Jeans",
        price: 48.99,
        category: "Jeans",
        image: p23,
    },
    {
        id: 24,
        title: "Stretch Fit Jeans",
        price: 52.99,
        category: "Jeans",
        image: p24,
    },
    {
        id: 25,
        title: "Classic Blue Denim",
        price: 55.99,
        category: "Jeans",
        image: p25,
    },
];