import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="text-center py-10">

      <h5 className="text-[#737373] font-bold text-[16px] leading-[24px] mt-5">WHAT WE DO</h5>

      <h1 className="text-[58px] font-bold mt-3 Leading-[80px] text-[#252B42]">
        Innovation tailored for you
      </h1>

      <Link href="/" className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
        <span className="text-[#737373]">Team</span>
      </Link>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">

        <div className="md:col-span-2">
          <Image
            src="/team1.png"
            alt="team"
            height={530}
            width={700}
            className="w-full h-auto rounded-md"
          />

        </div>

        <div className="md:col-span-1">

          <Image
            src="/team2.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />

        </div>

        <div className="md:col-span-1">

          <Image
            src="/team3.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md"
          />

        </div>

        <div className="md:col-span-1">

          <Image
            src="/team4.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md md:ml-[768px] md:mt-[-300px]"
          />

        </div>

        <div className="md:col-span-1">

          <Image
            src="/team5.png"
            alt="team"
            height={260}
            width={361}
            className="w-full h-auto rounded-md md:ml-[768px] md:mt-[-300px]"
          />

        </div>

      </div>

    </div>
  );
}
