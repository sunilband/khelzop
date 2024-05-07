// useSearch.tsx
import { useEffect } from "react";
import { FilteredGames, useGames } from "@/context/gamesContext";
import { useSearchResults } from "@/context/searchResultsContext";

const useSearch = (searchInput?: string) => {
  const { filteredGames } = useGames();
  const { setSearchResults } = useSearchResults();

  useEffect(() => {
    if (filteredGames && searchInput) {
      const regex = new RegExp(`^${searchInput}`, "i");
      const filteredResults: FilteredGames = {};

      Object.keys(filteredGames).forEach((category) => {
        filteredResults[category] = filteredGames[category].filter((game) => {
          return regex.test(game.name);
        });
      });

      setSearchResults(filteredResults);
    } else {
      setSearchResults(null);
    }
  }, [filteredGames, searchInput]);
};

export default useSearch;
