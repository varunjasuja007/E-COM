import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

const review = [
    {
        id: 1,
        name: "Emily Carter",
        profession: "Fashion Blogger",
        review:
            "Absolutely love the quality! The fabric feels premium, and the fit was exactly as described. I've already placed my second order.",
        rating: 5,
        image: customer1,
    },
    {
        id: 2,
        name: "Michael Brown",
        profession: "Graphic Designer",
        review:
            "The delivery was quick, and the packaging was excellent. The hoodie is comfortable, stylish, and perfect for everyday wear.",
        rating: 5,
        image: customer2,
    },
    {
        id: 3,
        name: "Sophia Wilson",
        profession: "Marketing Executive",
        review:
            "I was impressed by the attention to detail. The dress fits beautifully, and I've received so many compliments wearing it.",
        rating: 5,
        image: customer3,
    },
    {
        id: 4,
        name: "Daniel Lee",
        profession: "Entrepreneur",
        review:
            "Great shopping experience from start to finish. The sizes are accurate, and the customer support team was very helpful.",
        rating: 5,
        image: customer4,
    },
    {
        id: 5,
        name: "Olivia Martin",
        profession: "Content Creator",
        review:
            "The designs are trendy, the quality exceeded my expectations, and the prices are reasonable.",
        rating: 5,
        image: customer5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="max-w-[1400px] mx-auto px-10">
                <Heading highlight="Customers" heading="Saying" />

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-3 my-8">
                    <button className="custom-prev w-11 h-11 rounded-lg bg-zinc-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition">
                        <IoIosArrowBack size={22} />
                    </button>

                    <button className="custom-next w-11 h-11 rounded-lg bg-zinc-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition">
                        <IoIosArrowForward size={22} />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = ".custom-prev";
                        swiper.params.navigation.nextEl = ".custom-next";
                    }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    loop={true}

                    spaceBetween={25}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {review.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-zinc-100 rounded-xl md:p-8 md:h-full ">
                                <div className="flex items-center gap-5">
                                    <img src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500 outline-offset-4 "
                                    />

                                    <div>
                                        <h4 className="text-xl font-bold">{item.name}</h4>

                                        <p className="text-zinc-500">
                                            {item.profession}
                                        </p>

                                        <span className="flex text-yellow-400 mt-3 md:text-xl gap-1">
                                            {Array.from({ length: item.rating }, (_, index) => (
                                                <FaStar />
                                            ))}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-8 text-zinc-600 leading-7">
                                    {item.review}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;