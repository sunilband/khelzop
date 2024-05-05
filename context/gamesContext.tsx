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

interface GamesContextProps {
  gamesData: Game[] | null;
  setGamesData: React.Dispatch<React.SetStateAction<Game[] | null>>;
  filteredGames: FilteredGames | null;
  setFilteredGames: React.Dispatch<React.SetStateAction<FilteredGames | null>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

interface FilteredGames {
  [category: string]: Game[];
}

const GamesContext = createContext<GamesContextProps | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gamesData, setGamesData] = useState<Game[] | null>(null);
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
        setGamesData(response.data.games);
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
