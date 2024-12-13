import HeaderLogo from "@/assets/svgs/headerLogo.svg";
import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { FaInstagram, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { FiFacebook, FiMenu, FiX, FiYoutube } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const token = useSelector((s) => s.token.value);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white w-full h-20 py-6">
        <div className="container flex items-center justify-between">
          <div>
            <img src={HeaderLogo} alt="header logo" />
          </div>

          <div className="hidden md:flex gap-10 text-lg text-[#121212] font-medium">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink
              to={"/shop"}
              className={"flex items-center justify-center gap-2"}
            >
              Shop
              <span>
                <IoIosArrowDown />
              </span>
            </NavLink>
            <NavLink
              to={"/product"}
              className={"flex items-center justify-center gap-2"}
            >
              Product
              <span>
                <IoIosArrowDown />
              </span>
            </NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            {token ? (
              <NavLink to={"/admin/create-product"}>Admin</NavLink>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </div>

          <div className="hidden md:flex gap-4 text-3xl">
            <IoSearch />
            <FaRegUserCircle />
            <CgShoppingBag />
          </div>

          <div
            className="flex md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-[800px] bg-white z-50 px-6 py-10">
            {/* Logo and Close Button */}
            <div className="flex justify-between items-center mb-6">
              <img src={HeaderLogo} alt="header logo" />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Navigation Links */}
            <div className="relative flex items-center pb-6">
              <IoSearch className="absolute left-3 text-gray-400 text-xl" />
              <input
                className="border pl-10 pr-4 py-3 w-full rounded-lg"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-col gap-4 text-lg text-[#121212] font-medium ">
              <div className="flex items-center justify-between pb-4 border-b-2">
                <NavLink to={"/"} onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </div>
              <div className="flex items-center justify-between pb-4 border-b-2">
                <NavLink
                  to={"/shop"}
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between"
                >
                  Shop
                  <span>
                    <IoIosArrowDown />
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center justify-between pb-4 border-b-2">
                <NavLink
                  to={"/product"}
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between"
                >
                  Product
                  <span>
                    <IoIosArrowDown />
                  </span>
                </NavLink>
              </div>
              <div className="flex items-center justify-between pb-4 border-b-2">
                <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>
                  Contact Us
                </NavLink>
              </div>
            </div>

            {/* Cart and Wishlist */}
            <div className="mt-28 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b-2">
                <span>Cart</span>
                <div className="flex items-center gap-2">
                  <CgShoppingBag className="text-2xl" />
                  <span className="w-7 h-7 rounded-full bg-black text-white text-center">
                    2
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 border-b-2">
                <span>Wishlist</span>
                <div className="flex items-center gap-2">
                  <FaRegHeart className="text-2xl" />
                  <span className="w-7 h-7 rounded-full bg-black text-white text-center">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="mt-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 bg-black text-white text-lg rounded-lg"
              >
                {token ? "Admin Panel" : "Sign In"}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-start gap-6 mt-8 text-2xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
