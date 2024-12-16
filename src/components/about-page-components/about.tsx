import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">

      <div className="w-full text-center md:text-left md:w-1/2 md:ml-36">

        <h5 className="text-[#252B42] font-bold text-[16px] hidden md:block leading-[24px] mb-6">
          ABOUT COMPANY
        </h5>

        <h1 className="text-[#252B42] font-bold text-[40px] sm:text-[48px] md:text-[58px] leading-[80px] mb-6">
          ABOUT US
        </h1>

        <h4 className="text-[#737373] text-[20px] leading-[30px] font-medium sm:text-[18px] md:text-[20px] mt-5">
          We know how large objects will act, <br />
          but things on a small scale
        </h4>


        <div className="mt-7 flex justify-center md:justify-start">
          <button className="px-[40px] py-[15px] bg-[#23A6F0] text-[#FFFFFF] rounded-[5px] hover:bg-[#186ea0] transition-all duration-300 text-center">
            <span className="font-bold text-[14px] leading-[22px]">Get Quote Now</span>
          </button>
        </div>

      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/aboutus.png"
          alt="aboutus"
          height={280}
          width={415}
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default About;
