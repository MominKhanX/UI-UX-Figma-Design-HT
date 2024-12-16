import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">

      <div className="w-full text-center lg:ml-32 md:text-left md:w-1/2 md:ml-16">

        <h5 className="text-[#252B42] font-bold text-[16px] leading-[24px] mb-6">CONTACT US</h5>

        <h1 className="text-[#252B42] font-bold text-[40px] leading-[80px] sm:text-[48px] md:text-[58px] mb-6">
          Get in touch <br />
          today!
        </h1>

        <h4 className="font-medium text-[#737373] text-[20px] leading-[30px] sm:text-[18px] md:text-[20px] mt-5">
          We know how large objects will act, <br />
          but things on a small scale
        </h4>

        <div className="text-[#252B42] font-bold text-[24px] leading-[32px] mt-8">
          <h3>Phone; +451 215 215</h3>
          <h3 className="mt-5">Fax: +451 215 215</h3>
        </div>


        <div className="flex justify-center md:justify-start gap-6 mt-8">
          
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-500 text-[27px]"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-700 text-[27px]"
          >
            <IoLogoFacebook />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-pink-500 text-[27px]"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#252B42] hover:text-blue-600 text-[27px]"
          >
            <FaLinkedin />
          </Link>

        </div>

      </div>


      <div className="w-full md:w-1/2 mt-8 md:mt-[-40px]">
        <Image
          src="/contactus.png"
          alt="aboutus"
          height={280}
          width={415}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default ContactUs;
