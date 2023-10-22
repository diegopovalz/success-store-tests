import Image from "next/image";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { CartAddButton } from "./CartAddButton";

interface ProductCardProps {
  className?: string;
  product: PreviewProduct;
}

const ProductCard = ({ className, product }: ProductCardProps) => {
  console.log("product en ProductCard", product);
  let divClasses = "h-72 w-40 flex flex-col bg-neutral-200 m-1";
  if (className) divClasses += ` ${className}`;

  return (
    <div className={divClasses}>
      <div className="height-[1500px]">
        <Image
          alt={product.title + " image"}
          src={product.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col items-center">
        <span>{product.title}</span>
        <span>{product.price}</span>
        <CartAddButton product={{ ...product, amount: 1 }} color="gray" />
      </div>
    </div>
  );
};

export { ProductCard };
