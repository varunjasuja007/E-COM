import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Logo */}
                <div>
                    <a href="#" className="text-3xl font-bold">
                        Clo<span className="text-orange-500 uppercase">th</span>ing
                    </a>

                    <p className="text-zinc-600 mt-6 leading-7 max-w-sm">
                        We create stylish, comfortable, and high-quality clothing
                        designed for everyday confidence.
                    </p>

                    <p className="text-zinc-800 mt-6">
                        2026 &copy; All Rights Reserved
                    </p>
                </div>

                {/* Company + Support */}
                <div className="grid grid-cols-2 gap-10">

                    {/* Company */}
                    <div>
                        <h5 className="text-2xl font-bold text-zinc-800">
                            Company
                        </h5>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-zinc-600 hover:text-orange-500 transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-zinc-600 hover:text-orange-500 transition"
                                >
                                    FAQ's
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h5 className="text-2xl font-bold text-zinc-800">
                            Support
                        </h5>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-zinc-600 hover:text-orange-500 transition"
                                >
                                    Support Center
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-zinc-600 hover:text-orange-500 transition"
                                >
                                    Feedback
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-zinc-600 hover:text-orange-500 transition"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Stay Connected */}
                <div>
                    <h5 className="text-2xl font-bold text-zinc-800">
                        Stay Connected
                    </h5>

                    <p className="mt-6 text-zinc-600 leading-7">
                        Questions or Feedback?
                        <br />
                        We'd love to hear from you.
                    </p>

                    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm mt-6">
                        <input
                            type="email"
                            placeholder="Email Address"
                            autoCorrect="off"
                            className="flex-1 px-4 py-3 outline-none"
                        />

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 transition">
                            <IoIosArrowForward size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;