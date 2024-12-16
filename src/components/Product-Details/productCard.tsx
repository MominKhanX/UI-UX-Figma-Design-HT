"use client"

import React from 'react';
import Image from "next/image"
import Link from 'next/link';


export interface ProductCardProps {
  id: number,
  image: string;
  title: string;
  description: string,
  price: number;
  priceStrikeThrough?: number;
}

export default function ProductDetailsCard({
  image,
  title,
  description,
  price,
  priceStrikeThrough,
}: ProductCardProps) {

  return (
    <div className="w-full max-w-xs h-[430px] overflow-hidden bg-white">

      <div className="h-[280px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={239}
          height={280}
          className="object-cover"
        />
      </div>


      <div className="p-4 flex flex-col gap-2 justify-center items-center">


        <h5 className="text-[16px] leading-[24px] font-bold text-[#252B42] truncate">
          {title}
        </h5>


        <Link href="#" className="text-[14px] leading-[24px] text-[#737373] font-bold truncate">
          {description}
        </Link>


        <div className="flex gap-2 items-center">

          {priceStrikeThrough && (
            <h5 className="text-[16px] text-[#BDBDBD] font-bold leading-[24px]">
              ${priceStrikeThrough}
            </h5>
          )}

          <h5 className="text-[16px] leading-[24px] text-[#23856D] font-bold">${price}</h5>
          
        </div>

      </div>

    </div>
  );
};


