import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Price = () => {

  return (
    <div className="flex flex-col items-center w-full  py-20">

      <div className="text-center">

        <h5 className="text-[#737373] font-bold text-[16px] leading-[24px] mt-5">PRICING</h5>

        <h1 className="text-[40px] md:text-[58px] font-bold leading-[80px] mt-3 text-[#252B42]">
          Simple Pricing
        </h1>

        <Link href="/" className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
          Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
          <span className="text-[#737373]">Pricing</span>
        </Link>

      </div>

    </div>
  );
};

export default Price;