import React from "react";
import Heading from "../Heading/Heading";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbTruck } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const Process = () => {

    const rendersteps = steps.map(item => {
        return (
            <div className="flex-1">
                <span className=" flex justify-center items-center w-18 h-18  rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed ">{item.number}</span>

                <div className="flex items-center">
                    <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white  h-10 rounded-full">{item.icon}</span>

                    <div>
                        <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
                        <p className="text-zinc-600 mt-2">{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className="mx-w-[1400px] mx-auto px-10 py-20">
                <div className=" w-fit mr-auto ">
                    <Heading highlight="Our" heading="Procees" />
                </div>
                <div className="flex mt-20 items-center justify-center ">
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
        title: 'sourcing',
        para: 'Our experienced designers and skilled craftsmen create stylish, durable, and comfortable clothing with attention to every detail.',
        icon: <PiPlant />
    },

    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'Our experienced designers and skilled craftsmen create stylish, durable, and comfortable clothing with attention to every detail.',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Inspection',
        para: 'Every product undergoes multiple quality checks to ensure perfect stitching, fit, comfort, and finishing before delivery.',
        icon: <FaAward />
    },
    {
        id: 3,
        number: <TbCircleNumber4Filled />,
        title: 'Fast Delivery',
        para: 'Your order is carefully packed and delivered quickly to your doorstep with reliable tracking and secure packaging.',
        icon: <TbTruck />
    },

]