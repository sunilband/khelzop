"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllGames } from "@/lib/apiCalls/getAllGames";

interface Game {
  code: string;
  nameEn: string;
  battleSupported: boolean;
  rating: number;
  totalRating: number;
  name: string;
  categories: string[];
  created_at: string;
  gamePlays: number;
}

interface GamesContextProps {
  gamesData: Game[] | null;
  setGamesData: React.Dispatch<React.SetStateAction<Game[] | null>>;
  filteredGames: FilteredGames | null;
  setFilteredGames: React.Dispatch<React.SetStateAction<FilteredGames | null>>;
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

    return hashMap;
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getAllGames();
        setGamesData(response.data.games);
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
      value={{ gamesData, setGamesData, filteredGames, setFilteredGames }}
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
