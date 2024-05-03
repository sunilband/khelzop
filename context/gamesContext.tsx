"use client";

import React, { createContext, useContext, useState } from "react";

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

interface GameData {
  games: Game[];
  categories: { [key: string]: string };
  trendingGames: string[];
  gameOfTheWeek: string;
  newlyAddedGames: string[];
}

interface ApiResponse {
  data: GameData;
  error: string;
  code: string;
}

interface GamesContextProps {
  gamesData: ApiResponse | null;
  setGamesData: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
  filteredGames: Game[] | null;
  setFilteredGames: React.Dispatch<React.SetStateAction<Game[] | null>>;
}

const GamesContext = createContext<GamesContextProps | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gamesData, setGamesData] = useState<ApiResponse | null>(null);
  const [filteredGames, setFilteredGames] = useState<Game[] | null>(null);

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
