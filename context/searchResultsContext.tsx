"use client";
import React, { createContext, useContext, useState } from "react";
import { FilteredGames } from "@/context/gamesContext";

interface SearchContextProps {
  searchResults: FilteredGames | null;
  setSearchResults: React.Dispatch<React.SetStateAction<FilteredGames | null>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<FilteredGames | null>(
    null,
  );

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchResults = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchResults must be used within a SearchProvider");
  }
  return context;
};
