import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="bg-[#2A7CC7] w-full h-auto lg:py-0 lg:px-0 py-[100px] px-0 mb-[-40px]">

      <div className="flex flex-col md:flex-row items-center justify-between">

        <div className="text-left w-full lg:ml-[80px] ml-5 md:w-1/2">

          <h5 className="text-[#FFFFFF] font-bold text-[16px] leading-[24px] mb-4 md:mb-6">
            WORK WITH US
          </h5>

          <h2 className="text-[#FFFFFF] font-bold text-[40px] leading-[50px] md:text-[40px] mb-4 md:mb-6">
            Now Let&apos;s grow Yours
          </h2>

          <p className="text-[#FFFFFF] font-medium text-[14px] leading-[20px] md:text-[16px] mb-6">
            The gradual accumulation of information about atomic and <br />
            small-scale behavior during the first quarter of the 20th
          </p>

          <button className="border px-[40px] lg:ml-0 ml-[110px] py-[15px] md:px-9 md:py-3 rounded-md hover:bg-[#1e5282] transition duration-300">
            <span className="text-[#FFFFFF] ">Button</span>
          </button>

        </div>


        <div className="hidden md:block md:w-1/2">
          <Image
            src="/work.png"
            alt="work"
            height={320}
            width={590}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </div>
  );
};

export default Work;
