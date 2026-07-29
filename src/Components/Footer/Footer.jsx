import React from "react";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 py-20">
            <div className=" flex flex-wrap max-w-[1400px ] mx-auto px-10">
                <div className="flex-1 basis-[300px]">
                    <a href="#" className="logo" className="text-3xl font-bold">

                        {/*Logo*/}

                        Clo<span className="text-orange-500 uppercase">th</span>ing
                    </a>

                    <p className="text-zinc-600 mt-6 max-w-[350px]">
                        We create stylish, comfortable, and high-quality clothing designed for everyday confidence.
                    </p>

                    <p className="text-zinc-800 mt-6">
                        2026 &copy; all rights reserved
                    </p>
                </div>

                <ul className="flex-1">
                    <li>
                        <h5 className="text-zonc-800 text-2xl font-bold "> Company</h5>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">About</a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500"> FAQ's</a>
                    </li>
                </ul>

                <ul className="flex-1 ">
                    <li>
                        <h5 className="text-zonc-800 text-2xl font-bold "> Support</h5>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500">Support Center</a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500"> Feedback</a>
                    </li>
                    <li className="mt-6">
                        <a href="#" className="text-zinc-800 hover:text-orange-500"> Contect Us</a>
                    </li>

                </ul>

                <div>
                    <h5 className="text-zonc-800 text-2xl font-bold" >Stay Connected</h5>

                    <p className="mt-6 text-zinc-600">
                        Questions or Feedbacks <br />
                        We'd love to hear from you.
                    </p>
                </div>

            </div>

        </footer>
    )
}

export default Footer;