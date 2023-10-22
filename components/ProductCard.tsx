import Image from "next/image";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { toast } from "react-toastify";

interface ProductCardProps {
  className?: string;
  id: number;
  title: string;
  price: number;
  imageSource: string;
}

const ProductCard = ({
  className,
  id,
  title,
  price,
  imageSource,
}: ProductCardProps) => {
  const { addProductToCart } = useShoppingCartContext();

  const handleAddProductClick = () => {
    addProductToCart({
      id,
      title,
      price,
      image: imageSource,
      amount: 1,
    });
    toast.success(`${title} added to cart!`);
  };

  //224

  let divClasses = "h-72 w-40 flex flex-col bg-neutral-200 m-1";
  if (className) divClasses += ` ${className}`;

  return (
    <div className={divClasses}>
      <div className="height-[1500px]">
        <Image
          alt={title + " image"}
          src={imageSource}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col items-center">
        <span>{title}</span>
        <span>{price}</span>
        <button onClick={handleAddProductClick}>Add to cart</button>
      </div>
    </div>
  );
};

export { ProductCard };
