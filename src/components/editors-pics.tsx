import Image from "next/image";
import React from "react";

const EditorsPicks = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-0 mb-7 bg-[#FAFAFA] pt-3">

      <div>

        <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
          EDITOR&apos;S PICK
        </h2>

        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between
        </p>

      </div>

      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">

        <div className="relative">

          <Image src={"/men.png"} alt="men" width={509} height={500} />

          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-[16px]">MEN</span>
          </div>

        </div>

        <div className="relative">

          <Image src={"/women.png"} alt="women" width={240} height={500} />

          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-[16px]">WOMEN</span>
          </div>

        </div>

        <div className="flex flex-col gap-6">

          <div className="relative">

            <Image src={"/accessories.png"} alt="accessories" width={240} height={242} />

            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-[16px]">ACCESSORIES</span>
            </div>

          </div>

          <div className="relative">

            <Image src={"/kids.png"} alt="kids" width={240} height={242} />

            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-[16px]">KIDS</span>
            </div>

          </div>

        </div>

      </div>


      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">

        <div className="relative w-[90%] sm:w-full">

          <Image src={"/men.png"} alt="men" width={509} height={500} />

          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-[16px]">MEN</span>
          </div>

        </div>

        <div className="relative w-[90%] sm:w-full ml-24">

          <Image src={"/women.png"} alt="women" width={240} height={500} />

          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-[16px]">WOMEN</span>
          </div>

        </div>

        <div className="flex flex-col gap-6 w-[90%] sm:w-full">

          <div className="relative ml-12">

            <Image src={"/accessories.png"} alt="accessories" width={240} height={242} />

            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-[16px]">ACCESSORIES</span>
            </div>

          </div>

          <div className="relative ml-12">

            <Image src={"/kids.png"} alt="kids" width={240} height={242} />

            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-[16px]">KIDS</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditorsPicks;
