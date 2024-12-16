import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import React from "react";

const FeaturesPosts = () => {
  return (
    <div className="mt-32">

      <div className="text-center mb-20">
        <h6 id="blog" className="text-[#23A6F0] text-[14px] font-bold">Practice Advice</h6>
        <h2 className="text-[#252B42] text-[40px] leading-[50px] font-bold">Featured Posts</h2>

        <p className="text-[#737373] text-[14px] font-normal leading-[20px]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>


      <div className="flex flex-wrap justify-center items-center gap-3">

        {["blog1.png", "blog2.png", "blog3.png"].map((blog, index) => (
          <div
            key={index}
            className="max-w-xs sm:max-w-sm bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          >

            <div className="relative group">

              <div className="absolute top-4 left-4 rounded-[3px] bg-[#E74040] text-white py-1 px-2 text-[14px] font-bold h-[24px] w-[58px] flex items-center justify-center">
                NEW
              </div>

              <Image
                src={`/${blog}`}
                alt="blog"
                width={348}
                height={300}
                className="w-full h-72 object-cover"
              />

            </div>


            <div className="p-4">

              <div className="flex justify-start space-x-3 mb-3">

                <span className="text-[#8EC2F2] rounded-full text-[12px] leading-[16px]">
                  Google
                </span>

                <span className="text-[#737373] rounded-full text-[12px] leading-[16px]">
                  Trending
                </span>

                <span className="text-[#737373] rounded-full text-[12px] leading-[16px]">
                  New
                </span>

              </div>

              <h4 className="text-[20px] font-normal leading-[30px] text-[#252B42] mt-4">
                Loudest à la Madison #1 <br />
                (L&spos;integral)
              </h4>

              <p className="text-[#737373] font-normal leading-[20px] text-[14px] mt-2">
                We focus on ergonomics and meeting <br /> you where you work.
                It&apos;s only a <br /> keystroke away.
              </p>


              <div className="flex justify-between items-center mt-4 text-[12px] text-[#737373]">

                <div className="flex items-center space-x-2">

                  <div className="w-4 h-4 text-[#23A6F0]">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.49934 13.6667C3.20379 13.6232 0.54278 10.9622 0.499344 7.66668C0.54278 4.37113 3.20379 1.71011 6.49934 1.66668C9.79489 1.71011 12.4559 4.37113 12.4993 7.66668C12.4559 10.9622 9.79489 13.6232 6.49934 13.6667ZM6.49934 3.00001C3.93612 3.03376 1.86642 5.10346 1.83268 7.66668C1.86642 10.2299 3.93612 12.2996 6.49934 12.3333C9.06256 12.2996 11.1323 10.2299 11.166 7.66668C11.1323 5.10346 9.06256 3.03376 6.49934 3.00001ZM9.83268 8.33334H5.83268V4.33334H7.16601V7.00001H9.83268V8.33334ZM12.0273 3.47201L10.0213 1.47201L10.9607 0.527344L12.9673 2.52734L12.0273 3.47134V3.47201ZM0.970677 3.47201L0.0273438 2.52734L2.02134 0.527344L2.96468 1.47201L0.97201 3.47201H0.970677Z" fill="#23A6F0" />
                    </svg>

                  </div>

                  <span className="text-[#737373] text-font-normal font-[12px] leading-[16px]">22 April 2021</span>

                </div>


                <div className="flex items-center space-x-2">

                  <div className="w-4 h-4 text-[#23856D]">

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z" fill="#23856D" />
                    </svg>

                  </div>

                  <span className="text-[#737373] text-font-normal font-[12px] leading-[16px]">10 Comments</span>

                </div>

              </div>

              <div className="mt-4 flex items-center justify-start">

                <button className="text-[#737373] text-sm font-bold rounded-md bg-transparent flex items-center space-x-2 hover:underline">
                  <h6>Learn More</h6>
                  <FaChevronRight className="inline-block text-[#737373] group-hover:text-white" />
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturesPosts;