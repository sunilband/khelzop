"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllGames } from "@/lib/apiCalls/getAllGames";

export interface Game {
  code: string;
  nameEn: string;
  battleSupported: boolean;
  rating: number;
  totalRating: number;
  name: string;
  categories: string[];
  created_at: string;
  gamePlays: number;
  image?: string; // this is not coming from api but can be added
}

interface ApiResponseData {
  games: Game[];
  categories: { [key: string]: string };
  trendingGames: string[];
  gameOfTheWeek: string;
  newlyAddedGames: string[];
}

interface GamesContextProps {
  gamesData: ApiResponseData | null;
  setGamesData: React.Dispatch<React.SetStateAction<ApiResponseData | null>>;
  filteredGames: FilteredGames | null;
  setFilteredGames: React.Dispatch<React.SetStateAction<FilteredGames | null>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface FilteredGames {
  [category: string]: Game[];
}

const GamesContext = createContext<GamesContextProps | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gamesData, setGamesData] = useState<ApiResponseData | null>(null);
  const [filteredGames, setFilteredGames] = useState<FilteredGames | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredHashMap = (games: Game[]): FilteredGames => {
    const hashMap: FilteredGames = {};

    games.forEach((game) => {
      game.categories.forEach((category) => {
        if (!hashMap[category]) {
          hashMap[category] = [];
        }
        hashMap[category].push(game);
      });
    });

    // Add 'random' category
    const randomGames = [...games];
    randomGames.sort(() => Math.random() - 0.5);
    hashMap["random"] = randomGames.slice(0, 20);

    // Add 'new' category
    const newGames = [...games];
    newGames.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
    hashMap["new"] = newGames.slice(0, 20);

    // Add 'favorites' category
    hashMap["favorites"] = [];

    return hashMap;
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getAllGames();
        // @ts-ignore
        setGamesData(response.data);
        // @ts-ignore
        const filtererData = filteredHashMap(response.data.games);
        setFilteredGames(filtererData);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <GamesContext.Provider
      value={{
        gamesData,
        setGamesData,
        filteredGames,
        setFilteredGames,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = (): GamesContextProps => {
  const context = useContext(GamesContext);
  if (context === undefined) {
    throw new Error("useGames must be used within a GamesProvider");
  }
  return context;
};

export const useToggleFromFav = () => {
  const { setFilteredGames, gamesData } = useGames();

  const toggleFromFav = (code: string) => {
    setFilteredGames((prev) => {
      if (prev) {
        const isFavorite = prev.favorites.some(
          (game: Game) => game.code === code,
        );
        if (isFavorite) {
          const newFavorites = prev.favorites.filter(
            (game: Game) => game.code !== code,
          );
          return { ...prev, favorites: newFavorites };
        } else {
          const gameToAdd = gamesData?.games.find(
            (game: Game) => game.code === code,
          );
          if (gameToAdd) {
            return { ...prev, favorites: [gameToAdd, ...prev.favorites] };
          }
        }
      }
      return prev;
    });
  };

  return toggleFromFav;
};
