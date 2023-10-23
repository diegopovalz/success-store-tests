import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { BsFillCartPlusFill } from "react-icons/bs";
import { toast } from "react-toastify";

interface CartAddButtonProps {
  color?: string;
  size?: number;
  product: CartProduct;
}

const CartAddButton = ({ color, size, product }: CartAddButtonProps) => {
  const { addProductToCart } = useShoppingCartContext();

  const handleClick = (product: CartProduct) => {
    addProductToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <button
      onClick={() => {
        handleClick(product);
      }}
      className="cursor-pointer"
    >
      <BsFillCartPlusFill
        size={size ? size : 32}
        color={color ? color : "green"}
      />
    </button>
  );
};

export { CartAddButton };
