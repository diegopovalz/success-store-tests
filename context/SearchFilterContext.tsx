import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface SearchFilterContextProps {
  searchFilter: string;
  submitSearchFilter: (searchFilter: string) => void;
}

const SearchFilterContext = createContext<SearchFilterContextProps>(
  {} as SearchFilterContextProps
);

export const useSearchFilterContext = () => useContext(SearchFilterContext);

const SearchFilterContextProvider = ({ children }: ContextProviderProps) => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const router = useRouter();

  const submitSearchFilter = (searchFilter: string) => {
    const currentPath = router.pathname;
    if (currentPath !== "/") {
      router.push("/");
    }
    return setSearchFilter(searchFilter);
  };

  return (
    <SearchFilterContext.Provider
      value={{
        searchFilter,
        submitSearchFilter,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export { SearchFilterContextProvider };
