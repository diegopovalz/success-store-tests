import { BsFillCartDashFill } from "react-icons/bs";

interface CartSubButtonProps {
  onClick: () => void;
  size?: number;
}

const CartSubButton = ({ onClick, size }: CartSubButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <BsFillCartDashFill size={size ? size : 32} color="red" />
    </button>
  );
};

export { CartSubButton };
