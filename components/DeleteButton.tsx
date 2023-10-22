import { MdDelete } from "react-icons/md";

interface DeleteButtonProps {
  onClick: () => void;
  size?: number;
}

const DeleteButton = ({ onClick, size }: DeleteButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <MdDelete size={size ? size : 32} color="red" />
    </button>
  );
};

export { DeleteButton };
