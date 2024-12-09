import Image from "next/image";

export interface Product {
  image: string;
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-6">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          height={427}
          width={250}
        />
      </div>

      <div className="mt-4 text-center">
        <h5 className="text-[#252B42] leading-[24px] text-[16px] font-bold">{product.name}</h5>
        <p className="text-[#737373] font-bold leading-[24px] text-[14px]">{product.department}</p>
        <h5 className="text-[#BDBDBD] text-[16px] font-bold leading-[24px] mt-2">
          {product.originalPrice}{" "}
          <span className="text-[#23856D]">{product.discountedPrice}</span>
        </h5>

        <div className="flex justify-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <div key={index} className={`w-4 h-4 ${color} rounded-full`} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
