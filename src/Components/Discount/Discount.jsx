import React from "react";
import Button from "../Button/Button";
import discountBg from "../../assets/discountBg.png";

const Discount = () => {

    return (
        <section className="bg-zinc-100 bg-no-repeat  bg-contain mb-10" style={{ backgroundImage: `url(${discountBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] px-10 py-10">
                <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">20%</span>
                <div className="max-w-[700px]">
                    <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold mt-2 "><span className="">🛍️</span> First Order Discount</h3>
                    <p className="text-zinc-600 my-6 text-lg ">Claim 20% OFF your first order and refresh your wardrobe today.</p>
                    <Button content="Get a Discount" />
                </div>

            </div>
        </section>
    )
}

export default Discount;