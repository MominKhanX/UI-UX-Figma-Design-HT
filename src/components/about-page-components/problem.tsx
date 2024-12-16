import Image from "next/image";
import React from "react";

const Problem = () => {
  return (
    <div className="flex flex-col items-center mt-11 px-6">

      <div className="flex flex-col sm:flex-row w-full items-start gap-6 py-8 mx-4 lg:ml-[600px] ml-0 mr-0 -0 sm:mx-20">

        <div>
          <p className="text-[#E74040] font-medium text-[14px] leading-[20px] mb-8">Problems trying</p>

          <h3 className="font-bold text-[24px] text-[#252B42] leading-[32px] sm:mt-2">
            Met minim Mollie non desert<br /> Alamo est sit cliquey dolor do<br /> met sent.
          </h3>
        </div>

        <p className="font-medium text-[#737373] text-[14px] leading-[20px] sm:mt-16 mt-8 sm:mx-20 mx-4">
          Problems trying to resolve the conflict between the two major realms of<br /> Classical physics: Newtonian mechanics
        </p>

      </div>


      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-32 mt-16 mx-6 sm:mx-24">

        <div className="text-center">

          <h1 className="font-bold text-[#252B42] text-[58px] leading-[80px] sm:text-[58px]">15K</h1>

          <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] sm:text-[16px]">
            Happy Customers
          </h5>

        </div>

        <div className="text-center">

          <h1 className="font-bold text-[#252B42] text-[58px] leading-[80px] sm:text-[58px]">150K</h1>

          <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] sm:text-[16px]">
            Monthly Visitors
          </h5>

        </div>

        <div className="text-center">

          <h1 className="font-bold text-[#252B42] text-[58px] leading-[80px] sm:text-[58px]">15</h1>

          <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] sm:text-[16px]">
            Countries Worldwide
          </h5>

        </div>

        <div className="text-center">

          <h1 className="font-bold text-[#252B42] text-[58px] leading-[80px] sm:text-[58px]">100+</h1>

          <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] sm:text-[16px]">
            Top Partners
          </h5>

        </div>

      </div>


      <div className="mt-16 sm:mt-20 flex justify-center items-center mx-6 sm:mx-36">
        <Image src={"/problem.png"} alt="problem" width={989} height={540} />
      </div>

    </div>
  );
};

export default Problem;
