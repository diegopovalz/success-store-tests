import Image from "next/image";
import { CartAddButton } from "../commons/CartAddButton";
import { StarRating } from "../commons/StarRating";
import { ProductInfoButton } from "./ProductInfoButton";

interface ProductCardProps {
  className?: string;
  product: PreviewProduct;
}

const ProductCard = ({ className, product }: ProductCardProps) => {
  let divClasses =
    "flex flex-col justify-between bg-neutral-200 border-4 border-neutral-200 m-1 rounded-lg py-3";
  if (className) divClasses += ` ${className}`;

  return (
    <div className={divClasses}>
      <div className="w-full h-full">
        <Image
          className="object-contain w-full aspect-video bg-white"
          alt={product.title + " image"}
          src={product.image}
          width={200}
          height={0}
        />
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <span className="text-center">{product.title}</span>
        <StarRating rating={product.rating} />
        <span>${product.price}</span>
        <div className="flex w-full justify-around">
          <CartAddButton product={{ ...product, amount: 1 }} color="gray" />
          <ProductInfoButton productId={product.id} size={28} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
