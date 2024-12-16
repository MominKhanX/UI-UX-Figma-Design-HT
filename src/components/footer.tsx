import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-white">

      <div className="flex justify-between items-center py-12 px-10 mx-auto w-screen bg-[#FAFAFA]">

        <h2 className="text-[24px] font-bold text-[#252B42] lg:mr-0 mr-6">Bandage</h2>

        <div className="flex space-x-6">

          <Link href="#" aria-label="Facebook" className="text-[#23A6F0] hover:text-[#0f5c89]">
            <FaFacebook className="w-6 h-6" />
          </Link>

          <Link href="#" aria-label="Instagram" className="text-[#23A6F0] hover:text-[#0f5c89]">
            <FaInstagram className="w-6 h-6" />
          </Link>

          <Link href="#" aria-label="Twitter" className="text-[#23A6F0] hover:text-[#0f5c89]">
            <FaTwitter className="w-6 h-6" />
          </Link>

        </div>

      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-10">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">

          <div className="flex-1 min-w-[120px]">

            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-3">Company Info</h3>

            <ul className="text-[#737373] space-y-5 text-[14px] font-bold">

              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Carrier
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  We are hiring
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>

            </ul>

          </div>


          <div className="flex-1 min-w-[120px]">

            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-3">Legal</h3>

            <ul className="text-[#737373] space-y-5 text-[14px] font-bold">

              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Carrier
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  We Are Hiring
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>

            </ul>

          </div>


          <div className="flex-1 min-w-[120px]">

            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-3">Features</h3>

            <ul className="text-[#737373] space-y-5 text-[14px] font-bold">

              <li>
                <Link href="#" className="hover:underline">
                  Business Marketing
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  User Analytics
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Live Chat
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Unlimited Support
                </Link>
              </li>

            </ul>

          </div>


          <div className="flex-1 min-w-[120px]">

            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-3">Resources</h3>

            <ul className="text-[#737373] space-y-5 text-[14px] font-bold">

              <li>
                <Link href="#" className="hover:underline">
                  iOS & Android
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Watch a Demo
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Customers
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  API
                </Link>
              </li>

            </ul>

          </div>


          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-3">Get In Touch</h3>

            <div>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-2 border rounded-l-md text-[14px] w-full focus:outline-none bg-[#FAFAFA]"
                />
                <button className="bg-[#23A6F0] text-white px-4 py-3 text-[14px] leading-[28px] font-normal rounded-r-md hover:bg-[#0f5c89] transition duration-300">
                  Subscribe
                </button>

              </div>

              <p className="text-[#737373] text-[12px] mt-2">Lore imp sum dolor Amit</p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-16 bg-[#FAFAFA] h-[74px] w-screen flex items-center">
        <p className="text-[#737373] font-bold text-[14px] text-left ml-10">
          Made With Love By Finland. All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;