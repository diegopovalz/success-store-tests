import Image from "next/image";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      className="w-1/12 h-3/5 flex items-center justify-center bg-cyan-600 rounded-sm cursor-pointer"
      onClick={onClick}
    >
      <Image src="/icons/search.svg" alt="Search icon" width={24} height={24} />
    </button>
  );
};

export { SearchButton };
