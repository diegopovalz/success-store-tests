import { BsInfoSquareFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface ProductInfoButtonProps {
  color?: string;
  size?: number;
  productId: number;
}

const ProductInfoButton = ({
  color,
  size,
  productId,
}: ProductInfoButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${productId}`);
  };

  return (
    <button onClick={handleClick} className="cursor-pointer">
      <BsInfoSquareFill
        size={size ? size : 32}
        color={color ? color : "gray"}
      />
    </button>
  );
};

export { ProductInfoButton };
