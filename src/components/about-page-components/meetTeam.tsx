import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  profession: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  image: string;
}

const OurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Username",
      profession: "Profession",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member3.png",
    },
    {
      name: "Username",
      profession: "Profession",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member4.png",
    },
    {
      name: "Username",
      profession: "Profession",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
      image: "/team-member1.png",
    },
  ];

  return (
    <section className="py-16 bg-white">

      <h2 className="text-center leading-[50px] text-[40px] font-bold mb-20 text-[#252B42] md:mt-[160px]">
        Meet Our Team
      </h2>

      <p className="text-center text-[#737373] font-medium text-[14px] leading-[20px] mb-[50px] lg:mb-[120px] mt-[-70px]">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-[220px]">

        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">

            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className="mx-auto"
            />

            <h5 className="text-[#252B42] mt-6 text-[16px] leading-[24px] font-bold">
              {member.name}
            </h5>

            <h6 className="text-[#737373] font-bold text-[14px] leading-[24px] mt-3">
              {member.profession}
            </h6>

            <div className="flex justify-center mt-3 space-x-4">

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
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
