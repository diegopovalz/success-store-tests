import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { BsFillCartDashFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface CartSubButtonProps {
  color?: string;
  size?: number;
  productId: number;
  removeAll: boolean;
}

const CartSubButton = ({
  color,
  size,
  productId,
  removeAll,
}: CartSubButtonProps) => {
  const { removeProductFromCart } = useShoppingCartContext();

  const handleClick = (productId: number, removeAll: boolean) => {
    removeProductFromCart(productId, removeAll);
    toast.success(`Product removed from cart!`);
  };

  return (
    <button
      onClick={() => {
        handleClick(productId, removeAll);
      }}
      className="cursor-pointer"
    >
      {removeAll ? (
        <MdDelete size={size ? size : 32} color={color ? color : "red"} />
      ) : (
        <BsFillCartDashFill
          size={size ? size : 32}
          color={color ? color : "red"}
        />
      )}
    </button>
  );
};

export { CartSubButton };
