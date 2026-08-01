import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";


const Testimonials = () => {

    return (
        <section>
            <div className="max-w-[1400px]  px-10 mx-auto py-20 ">
                <Heading highlight='Customers' heading='Saying' />
                <div className="flex justify-end py-5 gap-x-3 ">

                    <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex bg-zinc-100 items-center justify-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
                        <IoIosArrowBack />
                    </button>

                    <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex bg-zinc-100 items-center justify-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
                        <IoIosArrowForward />
                    </button>

                </div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {review.map((item) => {
                        return (
                            <div className="bg-zinc-100 rounded-xl p-8">
                                <div className="flex gap-5 items-center">
                                    <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4">
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold">Name</h5>
                                        <p className="text-zinc-600 ">Porfession</p>
                                        <span>Stars</span>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <p className="text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit labore aliquid itaque tempore tempora eaque deleniti nostrum nesciunt officiis ducimus consequuntur eum libero, dignissimos mollitia in, expedita, doloremque dolor.</p>
                                </div>

                            </div>
                        )
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials;



const review = [
    {
        id: 1,
        name: "Emily Carter",
        profession: "Fashion Blogger",
        review:
            "Absolutely love the quality! The fabric feels premium, and the fit was exactly as described. I've already placed my second order.",
        rating: 5,
        para: "Verified Customer",
        image: customer1,
    },
    {
        id: 2,
        name: "Michael Brown",
        profession: "Graphic Designer",
        review:
            "The delivery was quick, and the packaging was excellent. The hoodie is comfortable, stylish, and perfect for everyday wear.",
        rating: 5,
        para: "Verified Customer",
        image: customer2,
    },
    {
        id: 3,
        name: "Sophia Wilson",
        profession: "Marketing Executive",
        review:
            "I was impressed by the attention to detail. The dress fits beautifully, and I've received so many compliments wearing it.",
        rating: 5,
        para: "Verified Customer",
        image: customer3,
    },
    {
        id: 4,
        name: "Daniel Lee",
        profession: "Entrepreneur",
        review:
            "Great shopping experience from start to finish. The sizes are accurate, and the customer support team was very helpful.",
        rating: 5,
        para: "Verified Customer",
        image: customer4,
    },
    {
        id: 5,
        name: "Olivia Martin",
        profession: "Content Creator",
        review:
            "The designs are trendy, the quality exceeded my expectations, and the prices are reasonable. Highly recommended for anyone looking for stylish outfits.",
        rating: 5,
        para: "Verified Customer",
        image: customer5,
    },
];