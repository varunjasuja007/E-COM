import React from "react";
import img from "../../assets/hero.png";
import Button from "../Button/Button"

const Hero = () => {
    return (
        <section className="py-1">
            <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between md:gap-10 gap-5 pt-20 min-h-screen">

                {/* HERO CONTENT */}
                <div className="w-1/2">
                    <span className="inline-block bg-orange-100 text-orange-600 text-lg px-5 py-2 rounded-full">
                        Export Best Quality
                    </span>

                    <h1 className="md:text-7xl text-5xl font-bold leading-tight mt-6 ">
                        Elevate <span className="text-orange-500">Your</span> Everyday{" "}
                        <span className="text-orange-500">Style</span>
                    </h1>

                    <p className="text-gray-600 text-lg mt-5 max-w-[530px mt-5 mb-10]">
                        Discover stylish, high-quality clothing made to keep you
                        comfortable and looking your best.
                    </p>
                    <Button content=" Shop Now" />

                    {/* <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition">
                        Shop Now
                    </button> */}
                </div>

                {/* HERO IMAGE */}
                <div className="w-1/2 flex justify-end">
                    <img
                        src={img}
                        alt="Hero"
                        className="w-full max-w-[650px] object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;