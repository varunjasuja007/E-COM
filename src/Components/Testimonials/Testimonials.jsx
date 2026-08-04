import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";

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
        <section className="py-12 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <Heading highlight="Customers" heading="Saying" />

                {/* Navigation */}
                <div className="flex justify-end gap-3 my-6 md:my-8">
                    <button className="custom-prev w-10 h-10 md:w-11 md:h-11 rounded-lg bg-zinc-100 hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
                        <IoIosArrowBack size={20} />
                    </button>

                    <button className="custom-next w-10 h-10 md:w-11 md:h-11 rounded-lg bg-zinc-100 hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
                        <IoIosArrowForward size={20} />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={20}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = ".custom-prev";
                        swiper.params.navigation.nextEl = ".custom-next";
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
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
                        <SwiperSlide key={item.id} className="h-auto">
                            <div className="bg-zinc-100 rounded-xl p-5 sm:p-6 lg:p-8 h-full flex flex-col">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover outline outline-2 outline-orange-500 outline-offset-2"
                                    />

                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm sm:text-base text-zinc-500">
                                            {item.profession}
                                        </p>

                                        <div className="flex gap-1 mt-2 text-yellow-400 text-sm sm:text-base">
                                            {Array.from({ length: item.rating }).map((_, index) => (
                                                <FaStar key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-6 text-sm sm:text-base text-zinc-600 leading-7 flex-grow">
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