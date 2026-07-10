import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className=" max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center">
        <a href="#" className="logo" className="text-3xl font-bold">

          {/*Logo*/}

          Clo<span className="text-orange-500 uppercase">th</span>ing
        </a>

        {/* desktop menu */}

        <ul className="flex items-center gap-x-15 ">
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500 hover:text-black-500">Home</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Products</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
        </ul>

        <div className="flex items-center gap-x-5">

          { /* input field */}
          <div className=" flex border-2 border-orange-500 rounded-full p-1">
            <input type="text" id="text" placeholder="Search...." autoComplete="on"
              className="flex-1 h-[6vh] px-3 focus:outline-none" />
            <button className=" bg-gradient-to-b from-red-500 to-orange-400 w-10 h-10 flex text-white  items-center justify-center rounded-full text-xl">
              <IoSearch text-xl />
            </button>
          </div>
          <a href="#" className="text-zinc-800 hover:text-orange-500 text-2xl">
            <FaRegHeart /> </a>
          <a href="#" className="text-zinc-800 hover:text-orange-500 text-2xl">
            <FaCartPlus />
          </a>
        </div>
      </nav>


    </header>
  )
}

export default Navbar;