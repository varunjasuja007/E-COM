import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // =========================
  // MOBILE MENU
  // =========================

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // =========================
  // NAVBAR SCROLL SHADOW
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // SEARCH
  // =========================

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) {
      navigate("/allproducts");
      closeMenu();
      return;
    }

    navigate(`/allproducts?search=${encodeURIComponent(query)}`);

    setSearch("");
    closeMenu();
  };

  // =========================
  // WISHLIST
  // =========================

  const handleWishlist = () => {
    alert("Wishlist page is not created yet ❤️");
  };

  // =========================
  // CART
  // =========================

  const handleCart = () => {
    alert("Cart page is not created yet 🛒");
  };

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.35)]"
          : ""
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* ===================================== */}
        {/* LOGO */}
        {/* ===================================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-wider text-zinc-800"
        >
          Clo
          <span className="text-orange-500 uppercase">th</span>
          ing
        </Link>

        {/* ===================================== */}
        {/* DESKTOP MENU */}
        {/* ===================================== */}

        <ul className="hidden md:flex items-center gap-x-10">

          {/* HOME */}

          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500 hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          {/* PRODUCTS */}

          <li>
            <Link
              to="/allproducts"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition duration-300"
            >
              Products
            </Link>
          </li>

          {/* T-SHIRTS */}

          <li>
            <Link
              to="/Tshirts"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition duration-300"
            >
              T-Shirts
            </Link>
          </li>

          {/* SHIRTS */}

          <li>
            <Link
              to="/Shirts"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition duration-300"
            >
              Shirts
            </Link>
          </li>

          {/* JEANS */}

          <li>
            <Link
              to="/Jeans"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition duration-300"
            >
              Jeans
            </Link>
          </li>

        </ul>

        {/* ===================================== */}
        {/* RIGHT SIDE */}
        {/* ===================================== */}

        <div className="flex items-center gap-x-5">

          {/* ================================= */}
          {/* DESKTOP SEARCH */}
          {/* ================================= */}

          <form
            onSubmit={handleSearch}
            className="hidden md:flex border-2 border-orange-500 rounded-full p-1"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search...."
              autoComplete="off"
              className="w-40 h-10 px-3 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-b from-red-500 to-orange-400 w-10 h-10 flex text-white items-center justify-center rounded-full text-xl hover:scale-105 transition duration-300"
            >
              <IoSearch />
            </button>
          </form>

          {/* ================================= */}
          {/* WISHLIST */}
          {/* ================================= */}

          <button
            type="button"
            onClick={handleWishlist}
            className="text-zinc-800 hover:text-orange-500 text-2xl transition duration-300"
            title="Wishlist"
          >
            <FaRegHeart />
          </button>

          {/* ================================= */}
          {/* CART */}
          {/* ================================= */}

          <button
            type="button"
            onClick={handleCart}
            className="text-zinc-800 hover:text-orange-500 text-2xl transition duration-300"
            title="Cart"
          >
            <FaCartPlus />
          </button>

          {/* ================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================= */}

          <button
            type="button"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>

        </div>

        {/* ===================================== */}
        {/* MOBILE MENU */}
        {/* ===================================== */}

        <ul
          className={`
            md:hidden
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            w-[90%]
            max-w-sm
            flex
            flex-col
            items-center
            gap-y-7
            bg-white/95
            backdrop-blur-xl
            shadow-xl
            rounded-xl
            p-8
            transition-all
            duration-500
            ${showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
            }
          `}
        >

          {/* HOME */}

          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="font-semibold tracking-wider text-orange-500 hover:text-orange-500"
            >
              Home
            </Link>
          </li>

          {/* PRODUCTS */}

          <li>
            <Link
              to="/allproducts"
              onClick={closeMenu}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </Link>
          </li>

          {/* T-SHIRTS */}

          <li>
            <Link
              to="/Tshirts"
              onClick={closeMenu}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              T-Shirts
            </Link>
          </li>

          {/* SHIRTS */}

          <li>
            <Link
              to="/Shirts"
              onClick={closeMenu}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Shirts
            </Link>
          </li>

          {/* JEANS */}

          <li>
            <Link
              to="/Jeans"
              onClick={closeMenu}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Jeans
            </Link>
          </li>

          {/* ================================= */}
          {/* MOBILE SEARCH */}
          {/* ================================= */}

          <li className="w-full">
            <form
              onSubmit={handleSearch}
              className="flex border-2 border-orange-500 rounded-full p-1 w-full"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search...."
                autoComplete="off"
                className="flex-1 min-w-0 h-10 px-3 focus:outline-none bg-transparent"
              />

              <button
                type="submit"
                className="bg-gradient-to-b from-red-500 to-orange-400 w-10 h-10 shrink-0 flex text-white items-center justify-center rounded-full text-xl"
              >
                <IoSearch />
              </button>
            </form>
          </li>

          {/* ================================= */}
          {/* MOBILE WISHLIST */}
          {/* ================================= */}

          <li>
            <button
              type="button"
              onClick={() => {
                handleWishlist();
                closeMenu();
              }}
              className="flex items-center gap-2 font-semibold text-zinc-800 hover:text-orange-500"
            >
              <FaRegHeart />
              Wishlist
            </button>
          </li>

          {/* ================================= */}
          {/* MOBILE CART */}
          {/* ================================= */}

          <li>
            <button
              type="button"
              onClick={() => {
                handleCart();
                closeMenu();
              }}
              className="flex items-center gap-2 font-semibold text-zinc-800 hover:text-orange-500"
            >
              <FaCartPlus />
              Cart
            </button>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Navbar;