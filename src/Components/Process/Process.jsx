import React from "react";
import Heading from "../Heading/Heading";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbTruck } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const Process = () => {

    const rendersteps = steps.map(item => {
        return (
            <div className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`}>
                <span className=" flex justify-center items-center w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed ">{item.number}</span>

                <div className="flex items-center gap-x-5 mt-10 ">
                    <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-12 h-12 rounded-full">{item.icon}</span>

                    <div className="flex-1">
                        <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
                        <p className="text-zinc-600 mt-2">{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20">
                <div className=" w-fit mr-auto ">
                    <Heading highlight="Our" heading="Process" />
                </div>
                <div className="flex flex-wrap gap-y-17 md:mt-20 mt-10 items-center justify-center md:pt-40 ">
                    {rendersteps}
                </div>


            </div>

        </section>
    )
}

export default Process;


const steps = [

    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'Premium fabrics sourced from trusted suppliers.',
        icon: <PiPlant />
    },

    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'Crafted with precision by skilled professionals.',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Inspection',
        para: 'Every product is carefully quality checked.',
        icon: <FaAward />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Fast Delivery',
        para: 'Secure packaging with fast doorstep delivery.',
        icon: <TbTruck />
    },

]