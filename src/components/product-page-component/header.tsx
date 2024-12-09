"use client";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiSearch, FiShoppingCart, FiHeart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">

      <div className="bg-[#23856D] py-4 hidden lg:block">

        <div className="container mx-auto flex justify-between items-center text-white text-sm">

          <div className="flex items-center gap-4 ml-36">

            <div className="flex items-center gap-1">
              <FiPhone />
              <p className="font-bold text-[14px] leading-[24px]">(225) 555-0118</p>
            </div>

            <div className="flex items-center gap-1">
              <FiMail />
              <p className="font-bold text-[14px] leading-[24px]">michelle.rivera@example.com</p>
            </div>

          </div>


          <p className="text-[14px] font-bold leading-[24px] ml-25 hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>


          <div className="flex items-center gap-4 mr-44">

            <p className="font-bold text-[14px] hidden md:block">Follow Us:</p>

            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </Link>

            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>

          </div>

        </div>

      </div>


      <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">

        <div className="container mx-auto flex items-center justify-between py-4">

          <div className="text-[24px] font-bold leading-[32px] text-[#252B42]">Bandage</div>

          <div className="flex items-center gap-4 md:hidden">

            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />

            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>

          </div>


          <nav className="hidden md:flex">

            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">

              <li>
                <Link href="/" className="font-bold text-[14px] leading-[24px] text-[#737373] hover:text-black">
                  Home
                </Link>
              </li>

              <li className="relative group">
                <Link
                  href="/product-list"
                  className="flex items-center gap-1 font-medium text-[14px] leading-[28px] text-[#252B42] hover:text-black"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="font-bold text-[14px] leading-[24px] text-[#737373] hover:text-black"
                >
                  About
                </Link>
              </li>

              <li>
                <Link href="/blog" className="font-bold text-[14px] leading-[24px] text-[#737373] hover:text-black">
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="font-bold text-[14px] leading-[24px] text-[#737373] hover:text-black"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/pages" className="font-bold text-[14px] leading-[24px] text-[#737373] hover:text-black">
                  Pages
                </Link>
              </li>

            </ul>

          </nav>


          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">

            <button className="text-sm font-medium"><FaRegUser className="text-[14px] leading-[24px] inline-flex" />Login/Register</button>

            <FiSearch className="text-lg cursor-pointer" />

            <FiShoppingCart className="text-lg cursor-pointer" />

            <FiHeart className="text-lg cursor-pointer" />

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">

            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>

            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Navbar;