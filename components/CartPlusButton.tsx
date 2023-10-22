import { BsFillCartPlusFill } from "react-icons/bs";

interface CartPlusButtonProps {
  onClick: () => void;
  size?: number;
}

const CartPlusButton = ({ onClick, size }: CartPlusButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <BsFillCartPlusFill size={size ? size : 32} color="green" />
    </button>
  );
};

export { CartPlusButton };
