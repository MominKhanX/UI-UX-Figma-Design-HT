"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight, FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white py-4">

      <div className="container mx-auto flex items-center justify-between px-4">

        <div className="text-[24px] font-bold text-[#252B42] lg:ml-[130px] ml-2 mr-8">
          Bandage
        </div>

        <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">

          <ul className="list-none flex gap-8">
            {" "}

            <Link href="/">
              <li className="cursor-pointer hover:text-[#000000] transition duration-300">
                Home
              </li>
            </Link>

            <Link href="/product-list">
              <li className="cursor-pointer hover:text-[#000000] transition duration-300">
                Product
              </li>
            </Link>

            <Link href="/pricing">
              <li className="cursor-pointer hover:text-[#000000] transition duration-300">
                Pricing
              </li>
            </Link>

            <Link href="/contact">
              <li className="cursor-pointer hover:text-[#000000] transition duration-300">
                Contact
              </li>
            </Link>

          </ul>

        </nav>


        <div className="flex items-center gap-4 ml-auto">

          <button className="md:hidden flex items-center justify-center p-2  text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            <FiSearch size={20} />
          </button>


          <button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            <FiShoppingCart size={20} />
          </button>


          <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded hover:bg-[#37a6e6] font-bold hover:text-white transition duration-300">
            Login
          </button>


          <button className="hidden md:flex items-center mr-32 gap-2 px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-[#195f88] transition duration-300">
            <span className="font-bold text-[14px] leading-[22px]">Become a member</span>
            <FiArrowRight className="text-lg" />
          </button>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#252B42]">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"
          } bg-white shadow-md mt-4 px-4 py-6 flex justify-center items-center x`}
      >
        <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
          {" "}

          <Link href="/">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>

          <Link href="/product-list">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Product
            </li>
          </Link>

          <Link href="/pricing">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Pricing
            </li>
          </Link>

          <Link href="/contact">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Contact
            </li>
          </Link>

        </ul>

      </div>
      
    </header>
  );
};

export default Header;
