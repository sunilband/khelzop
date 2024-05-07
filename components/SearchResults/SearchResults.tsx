"use client";
import { useGames, useToggleFromFav } from "@/context/gamesContext";
import { useSearchResults } from "@/context/searchResultsContext";
import Image from "next/image";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { gameRedirect } from "@/constants";
import { motion } from "framer-motion";

type Props = {};

const SearchResults = (props: Props) => {
  const { searchResults } = useSearchResults();
  const { gamesData, filteredGames } = useGames();
  const allCategoriesFromApi = gamesData
    ? Object.keys(gamesData?.categories)
    : null;

  const toggleFromFav = useToggleFromFav();

  return (
    searchResults && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
        className="w-96 h-96 sm:-ml-[11.5rem] -ml-[12rem]  mt-14 bg-white dark:bg-darkprimary z-50 shadow-lg dark:shadow-darkprimary p-4  overflow-y-auto rounded-lg"
      >
        {searchResults &&
          Object.keys(searchResults).map((category) => {
            if (searchResults[category].length > 0) {
              return (
                <div key={category} className="flex flex-col gap-1 mt-4">
                  <h2 className="text-lg font-semibold text-primary flex gap-1 uppercase">
                    <Image
                      src={`/icons/${category}.svg`}
                      alt="heart"
                      width={20}
                      height={20}
                    />
                    {allCategoriesFromApi?.includes(category)
                      ? gamesData?.categories[category]
                      : category}
                  </h2>
                  <div
                    className={`grid gap-2 ${searchResults[category].length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                  >
                    {searchResults[category].map((game) => {
                      const isFavourite =
                        filteredGames &&
                        filteredGames?.favorites.some(
                          (favGame) => favGame.code === game.code,
                        );
                      return (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{
                            duration: 0.2,
                            type: "tween",
                            ease: "easeInOut",
                          }}
                          key={game.code}
                          className="flex justify-between gap-1 items-center w-full p-1 px-2 rounded bg-primary h-14 cursor-pointer"
                        >
                          <Link
                            href={`${gameRedirect}/${game.code}`}
                            key={game.code}
                          >
                            <p className="text-sm font-light text-white cursor-pointer hover:underline">
                              {game.name}
                            </p>
                          </Link>
                          <FaRegHeart
                            className={`ml-2 w-4 z[100] fill-white ${isFavourite ? "hidden" : "block"}`}
                            onClick={() => {
                              event?.preventDefault();
                              event?.stopPropagation();
                              toggleFromFav(game.code);
                            }}
                          />
                          <FaHeart
                            className={`ml-2 w-4 z[100] fill-red-500 ${isFavourite ? "block" : "hidden"}`}
                            onClick={() => {
                              event?.preventDefault();
                              event?.stopPropagation();
                              toggleFromFav(game.code);
                            }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return null;
          })}

        {
          // if all results are empty array then so no results
          searchResults &&
            Object.keys(searchResults).every(
              (category) => searchResults[category].length === 0,
            ) && (
              <div className="flex justify-center items-center h-40">
                <p className="text-lg font-semibold text-primary">
                  No Results Found
                </p>
              </div>
            )
        }

        {!searchResults && (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg font-semibold text-primary">Loading...</p>
          </div>
        )}
      </motion.div>
    )
  );
};

export default SearchResults;
