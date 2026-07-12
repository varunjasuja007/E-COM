import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <header className="bg-white fixed top-0 right-10 left-5">
      <nav className=" max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        <a href="#" className="logo" className="text-3xl font-bold">

          {/*Logo*/}

          Clo<span className="text-orange-500 uppercase">th</span>ing
        </a>

        {/* desktop menu */}

        <ul className="md:flex items-center gap-x-15 hidden ">
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
          <div className=" md:flex border-2 border-orange-500 rounded-full p-1 hidden ">
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

          {/*three dot */}
          <a href="#" className="zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>


        {/*for mobile */}

        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden  absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500ms ${showMenu ? 'left-1/2' : ""}`}>
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

          <li className=" flex border-2 border-orange-500 rounded-full p-1 md:hidden ">
            <input type="text" id="text" placeholder="Search...." autoComplete="on"
              className="flex-1 h-[6vh] px-3 focus:outline-none" />
            <button className=" bg-gradient-to-b from-red-500 to-orange-400 w-10 h-10 flex text-white  items-center justify-center rounded-full text-xl">
              <IoSearch text-xl />
            </button>
          </li>
        </ul>

      </nav>


    </header>
  )
}

export default Navbar;