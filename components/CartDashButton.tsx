import { BsFillCartDashFill } from "react-icons/bs";

interface CartDashButtonProps {
  onClick: () => void;
  size?: number;
}

const CartDashButton = ({ onClick, size }: CartDashButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <BsFillCartDashFill size={size ? size : 32} color="red" />
    </button>
  );
};

export { CartDashButton };
