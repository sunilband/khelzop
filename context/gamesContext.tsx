"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  imageTiny?: string; // this is not coming from api but can be added
  new?: boolean; // this is not coming from api but can be added
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

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getAllGames();
        let newApiResponse: any = await fetch(
          process.env.NEXT_PUBLIC_NEW_GAMEZOP_API || "",
          {
            next: {
              revalidate: 60,
            },
          },
        );
        newApiResponse = await newApiResponse.json();
        const oldApiGames = convertNewApiGamesToOldApiGames(
          newApiResponse?.games,
        );
        console.log("New API Response", oldApiGames);
        // @ts-ignore
        const filtererData = filteredHashMap(oldApiGames);
        setFilteredGames(filtererData);
        response.data.games = oldApiGames;
        console.log("New API Response", newApiResponse);
        // @ts-ignore
        setGamesData(response.data);
        console.log("Response", response.data);
        console.log("Filtered Data", filtererData);
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

  const toggleFromFav = useCallback(
    (code: string) => {
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
    },
    [setFilteredGames, gamesData],
  );

  return toggleFromFav;
};

// usefull functions

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
  const newGames = games.filter((game) => game.new);
  hashMap["new"] = newGames;

  // Add 'favorites' category
  hashMap["favorites"] = [];

  return hashMap;
};

const convertNewApiGamesToOldApiGames = (games: any) => {
  const mappedData = games.map((game: any) => ({
    code: game.code,
    nameEn: game.name.en,
    battleSupported: false, // Assuming default value as this data isn't present in the new API
    rating: game.rating,
    totalRating: game.numberOfRatings,
    name: game.name.en,
    categories: game.categories.en.map((category: any) =>
      category.toLowerCase(),
    ), // Converting to lowercase to match old API format
    created_at: new Date().toISOString(), // Assuming current date as this data isn't present in the new API
    gamePlays: game.gamePlays,
    image: game.assets.square,
    imageTiny: game.assets.coverTiny,
    new: game.tags.en == "New Games" ? true : false,
  }));

  return mappedData;
};
