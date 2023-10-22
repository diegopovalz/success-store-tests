import { useSearchFilterContext } from "@/context/SearchFilterContext";
import { SearchButton } from "./SearchButton";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const { submitSearchFilter } = useSearchFilterContext();

  const handleSearchSubmit = () => {
    const inputElement = document.getElementById("search") as HTMLInputElement;
    submitSearchFilter(inputElement.value);
  };

  let divClasses = "flex items-center justify-center";
  if (className) divClasses += ` ${className}`;

  return (
    <div className={divClasses}>
      <label htmlFor="search" hidden={true}>
        Input what you want to find
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search product names"
        className="w-2/3 h-3/5 bg-white rounded-sm border-1 border-gray-300 p-2"
      ></input>
      <SearchButton onClick={handleSearchSubmit} />
    </div>
  );
};

export { SearchBar };
