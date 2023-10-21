import Image from "next/image";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { toast } from "react-toastify";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageSource: string;
}

const ProductCard = ({ id, title, price, imageSource }: ProductCardProps) => {
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

  return (
    <div className="h-72 w-40 flex flex-col bg-neutral-200 m-1">
      <Image
        alt={title + " image"}
        src={imageSource}
        width={160}
        height={224}
      />
      <div className="flex flex-col items-center">
        <span>{title}</span>
        <span>{price}</span>
        <button onClick={handleAddProductClick}>Add to cart</button>
      </div>
    </div>
  );
};

export { ProductCard };
