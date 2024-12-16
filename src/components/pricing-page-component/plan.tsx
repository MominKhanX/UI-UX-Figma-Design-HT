"use client";
import Image from "next/image";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Plan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-[#FAFAFA] py-12">

      <div className="text-center mt-14">

        <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px]">Pricing</h2>

        <p className="text-[#737373] text-[14px] font-medium leading-[20px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

      </div>


      <div className="flex items-center justify-center mt-10 gap-4">

        <h5 className="text-[#252B42] font-bold text-[16px] leading-[24px]">Monthly</h5>

        <div
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer border border-[#23A6F0]`}
          onClick={() => setIsMonthly(!isMonthly)}
        >

          <div
            className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${isMonthly ? "translate-x-7 bg-[#2DC071]" : "bg-[#D0D0D0]"
              }`}
          >
          </div>

        </div>

        <div className="flex items-center gap-2">

          <h5 className="text-[#252B42] font-bold text-[16px] leading-[24px]">Yearly</h5>

          <div className="bg-[#B2E3FF] px-[20px] py-[10px] rounded-[37px]">
            <h6 className="text-[#23A6F0] text-[14px] font-bold leading-[24px]">Save 25%</h6>
          </div>

        </div>

      </div>


      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">

        <div className="border-2 border-[#23A6F0] rounded-lg p-6 bg-transparent shadow-md h-[664px] flex flex-col justify-between">

          <div>

            <h3 className="font-bold text-[#252B42] text-[24px] leading-[32px] text-center">
              FREE
            </h3>

            <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] text-center mt-3">
              Organize across all <br />
              apps by hand
            </h5>

            <p className="text-[#23A6F0] font-bold text-[40px] leading-[50px] text-center mt-5">
              0
              <span className="text-[#23A6F0] font-bold text-[24px] leading-[32px]">$</span>

              <span className="text-[#8EC2F2] font-bold text-[14px] leading-[24px]">
                Per Month
              </span>

            </p>

          </div>

          <ul className="space-y-8">

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                1GB Cloud Storage
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Email and community <br /> support
              </span>

            </li>

          </ul>

          <button className="bg-[#252B42] px-[70px] py-[15px] flex justify-center items-center rounded-md mx-auto hover:bg-[#2f3653]">
            <span className="text-[#FFFFFF] font-bold text-[14px] leading-[22px]">Try for free</span>
          </button>

        </div>


        <div className="border-2 border-[#23A6F0] rounded-lg p-6 md:mt-[-40px] bg-[#252B42] shadow-md h-[700px] flex flex-col justify-between">

          <div>

            <h3 className="font-bold text-[#FFFFFF] text-[24px] leading-[32px] text-center">
              STANDARD
            </h3>

            <h5 className="font-bold text-white text-[16px] leading-[24px] text-center mt-3">
              Organize across all <br />
              apps by hand
            </h5>

            <p className="text-[#23A6F0] font-bold text-[40px] leading-[50px] text-center mt-5">
              9.99
              <span className="text-[#23A6F0] font-bold text-[24px] leading-[32px]">
                $
              </span>

              <span className="text-[#8EC2F2] font-bold text-[14px] leading-[24px]">
                Per Month
              </span>

            </p>

          </div>

          <ul className="space-y-8">

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-white font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-white font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-white font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-white font-bold text-[14px] leading-[24px]">
                1GB Cloud Storage
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-white font-bold text-[14px] leading-[24px]">
                Email and community <br /> support
              </span>

            </li>

          </ul>

          <button className="bg-[#23A6F0] px-[70px] py-[15px] flex justify-center items-center rounded-md mx-auto hover:bg-[#1b628b]">
            <span className="text-[#FFFFFF] font-bold text-[14px] leading-[22px]">Try for free</span>
          </button>

        </div>



        <div className="border-2 border-[#23A6F0] rounded-lg p-6 bg-transparent shadow-md h-[664px] flex flex-col justify-between">

          <div>

            <h3 className="font-bold text-[#FFFFFF] text-[24px] leading-[32px]  text-center">
              PREMIUM
            </h3>

            <h5 className="font-bold text-[#737373] text-[16px] leading-[24px] text-center mt-3">
              Organize across all <br />
              apps by hand
            </h5>

            <p className="text-[#23A6F0] font-bold text-[40px] leading-[50px] text-center mt-5">
              29.99
              <span className="text-[#23A6F0] font-bold text-[24px] leading-[32px]">
                $
              </span>

              <span className="text-[#8EC2F2] font-bold text-[14px] leading-[24px]">
                Per Month
              </span>

            </p>

          </div>

          <ul className="space-y-8">

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#2DC071] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Unlimited product updates
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                1GB Cloud Storage
              </span>

            </li>

            <li className="flex items-center gap-3">

              <div className="w-[32px] h-[32px] bg-[#BDBDBD] rounded-full flex justify-center items-center">
                <FiCheck className="text-white text-[14px]" />
              </div>

              <span className="text-[#252B42] font-bold text-[14px] leading-[24px]">
                Email and community <br /> support
              </span>

            </li>

          </ul>

          <button className="bg-[#252B42] px-[70px] py-[15px] flex justify-center items-center rounded-md mx-auto hover:bg-[#2f3653]">
            <span className="text-[#FFFFFF] font-bold text-[14px] leading-[22px]">Try for free</span>
          </button>

        </div>

      </div>

      <div>

        <h4 className="text-[#252B42] font-normal text-[20px] leading-[30px] mt-28 text-center sm:text-[24px]">
          Trusted By Over 4000 Big Companies
        </h4>

        <div className="flex justify-center items-center mt-6">
          <Image
            src={"/companies.png"}
            alt="companies"
            width={1054}
            height={175}
            className="w-full max-w-[90%] sm:max-w-[1054px] h-auto"
          />

        </div>

      </div>

    </div>
  );
};

export default Plan;