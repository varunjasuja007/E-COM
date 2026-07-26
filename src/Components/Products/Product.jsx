import React, { useState } from 'react'
import Heading from '../Heading/Heading';
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards';


const Product = () => {

    const categories = ['All', 'T-Shirts', 'Shirts', 'Jeans'];
    const [activeTab, setActiveTab] = useState('All')

    const renderCards = ProductList.map(product => {
        return (
            <Cards image={product.image} title={product.title} price={product.price} />
        )
    })

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

                {/* Product listing */}

                <div className='grid grid-cols-4  gap-9 mt-20'>
                    {renderCards}
                </div>


            </div>
        </section>
    )
}

export default Product;



