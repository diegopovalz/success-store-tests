import { useSearchFilterContext } from "@/context/SearchFilterContext";

const Searchbar = () => {
  const { submitSearchFilter } = useSearchFilterContext();

  const handleSearchSubmit = () => {
    const inputElement = document.getElementById("search") as HTMLInputElement;
    submitSearchFilter(inputElement.value);
  };

  return (
    <div className="w-2/6">
      <label htmlFor="search" hidden={true}>
        Input what you want to find
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search product names"
      ></input>
      <button className="bg-red-600" type="button" onClick={handleSearchSubmit}>
        Buscar
        <svg></svg>
      </button>
    </div>
  );
};

export { Searchbar };
