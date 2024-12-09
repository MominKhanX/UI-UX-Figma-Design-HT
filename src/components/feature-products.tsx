import Image from "next/image";
import ProductCard from "./product-card";
import { Product } from "../../interface";

const FeatureProducts: React.FC = () => {
  const products: Product[] = [
    {
      image: "/feature1.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature2.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature3.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature4.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature5.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature6.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature7.png",
      name: "Graphic Strategy",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature8.png",
      name: "Graphic Strategy",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">

      <div>
        <h4 className="text-[#737373] font-normal leading-[30px] text-[20px]">Featured Products</h4>
        <h2 className="text-[#252B42] text-[24px] font-bold leading-[32px] mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] font-normal text-[14px] leading-[20px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-16 pt-7 flex items-center justify-between flex-col md:flex-row">

        <div className="text-white space-y-4 ml-4 sm:ml-12 md:ml-36 text-center sm:text-left">

          <h4 className="text-[20px] font-normal leading-[30px]">SUMMER 2020</h4>
          <h1 className="text-[40px] leading-[80px] sm:text-[50px] md:text-[58px] font-bold">
            Vita Classic <br /> <span>Product</span>
          </h1>

          <p className="text-[14px] font-normal leading-[20px] sm:text-[16px]">
            We know how large objects will act, We know <br />
            <span>how objects will act, We know</span>
          </p>


          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
            <h3 className="text-[24px] font-bold leading-[32px]">$16.48</h3>

            <button className="text-[14px] font-bold bg-[#2DC071] py-4 px-10 rounded-md hover:bg-green-600 mt-4 sm:mt-0">
              ADD TO CART
            </button>
          </div>

        </div>


        <div className="w-full sm:w-[400px] md:w-[510px] flex-shrink-0">
          <Image
            src={"/classic.png"}
            alt="classic"
            width={510}
            height={685}
            className="w-full object-cover"
          />
        </div>
        
      </div>

      <div className="flex items-center justify-between mt-16 flex-col md:flex-row">

        <div className="w-full md:w-auto">
          <Image
            src={"/universe.png"}
            alt="universe"
            height={704}
            width={682}
            className="w-full mt-[-64px] ml-7"
          />
        </div>


        <div className="text-center md:text-left w-full md:w-auto mt-6 md:mt-0">

          <h5 className="text-[#BDBDBD] font-bold text-[16px] leading-[24px]">SUMMER 2020</h5>
          
          <h2 className="text-[#252B42] font-bold text-[30px] leading-[50px] sm:text-[40px] mt-8">
            Part of the Neural <br /> Universe
          </h2>

          <h4 className="text-[#737373] font-normal leading-[30px] text-[14px] sm:text-[20px] mt-7">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>

          <div className="flex gap-5 mt-5 justify-center md:justify-start">
            <button className="text-white text-[14px] font-bold py-[15px] px-[40px] rounded-md bg-[#2DC071] hover:bg-[#1caf61] transition duration-300">
              Buy Now
            </button>

            <button className="border-[1.5px] border-[#2DC071] text-[#2DC071] font-bold py-[15px] px-[40px] rounded-[5px] hover:bg-[#2DC071] hover:text-white transition duration-300">
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
