import React from "react";
import Heading from "../Heading/Heading";
import {
    TbCircleNumber1Filled,
    TbCircleNumber2Filled,
    TbCircleNumber3Filled,
    TbCircleNumber4Filled,
    TbTruck,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const Process = () => {
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20">
                <div className="w-fit mr-auto">
                    <Heading highlight="Our" heading="Process" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 items-center">
                    {steps.map((item) => (
                        <div
                            key={item.id}
                            className={`${item.id === 2 || item.id === 4 ? "lg:-mt-28" : ""}`}
                        >
                            {/* Number */}
                            <div className="flex justify-center">
                                <span className="flex justify-center items-center w-20 h-20 rounded-full text-7xl bg-zinc-800 text-white outline-[3px] outline-offset-[6px] outline-dashed outline-zinc-800">
                                    {item.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex items-start gap-5 mt-10">
                                <span className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white text-3xl shrink-0">
                                    {item.icon}
                                </span>

                                <div>
                                    <h4 className="text-2xl font-bold text-zinc-800">
                                        {item.title}
                                    </h4>

                                    <p className="text-zinc-600 mt-2 leading-7">
                                        {item.para}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "Premium fabrics sourced from trusted suppliers.",
        icon: <PiPlant />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "Crafted with precision by skilled professionals.",
        icon: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Inspection",
        para: "Every product is carefully quality checked.",
        icon: <FaAward />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Fast Delivery",
        para: "Secure packaging with fast doorstep delivery.",
        icon: <TbTruck />,
    },
];