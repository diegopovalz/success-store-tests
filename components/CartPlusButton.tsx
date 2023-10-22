import { BsFillCartPlusFill } from "react-icons/bs";

interface CartPlusButtonProps {
  onClick: () => void;
  color?: string;
  size?: number;
}

const CartPlusButton = ({ onClick, color, size }: CartPlusButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <BsFillCartPlusFill
        size={size ? size : 32}
        color={color ? color : "green"}
      />
    </button>
  );
};

export { CartPlusButton };
