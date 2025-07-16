import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [filters, setFilters] = useState({ location: "", type: "", budget: "" });
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider
      value={{ filters, setFilters, results, setResults, hasSearched, setHasSearched }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
