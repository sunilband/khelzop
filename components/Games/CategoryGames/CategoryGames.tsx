"use client";
import GameCard from "@/components/GameCard.tsx/GameCard";
import Image from "next/image";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useGames } from "@/context/gamesContext";
import { notFound } from "next/navigation";
import CategorySkeleton from "@/components/Skeletons/CategorySkeleton";
import { useRouter } from "next/navigation";

type Props = {
  category: string;
};

const CategoryGames = ({ category }: Props) => {
  const { gamesData, filteredGames, setSelectedCategory } = useGames();

  const router = useRouter();

  if (filteredGames && filteredGames[category] == undefined) return notFound();

  const allCategoriesFromApi = gamesData
    ? Object.keys(gamesData?.categories)
    : null;

  return (
    <>
      {!filteredGames && <CategorySkeleton />}
      {filteredGames && (
        <div className="w-full pb-10 pt-5 mb-5  px-4 rounded-lg bg-white dark:bg-darksecondary drop-shadow-md">
          <div className="flex justify-between gap-2 items-center pb-5">
            <div className="flex gap-2 items-center">
              <Image
                src={`/icons/${category}.svg`}
                width={40}
                height={40}
                alt="strategy"
              />
              <p className="font-extrabold tracking-wide sm:text-xl text-base dark:text-white uppercase">
                {allCategoriesFromApi?.includes(category)
                  ? gamesData?.categories[category]
                  : category}
              </p>
            </div>

            <button
              className="bg-primary   flex items-center text-white px-4 py-2 rounded-lg"
              onClick={() => router.push("/")}
            >
              All Categories
              <div className="ml-2 bg-black rounded-full p-1">
                <MdNavigateNext />
              </div>
            </button>
          </div>

          <div className="flex gap-4 flex-wrap justify-center ">
            {filteredGames && filteredGames[category].length == 0 && (
              <p className="text-xl tracking widest font-semibold">
                No games found
              </p>
            )}
            {filteredGames &&
              filteredGames[category].map((game: any, index: number) => (
                <div key={index}>
                  <GameCard
                    name={game.name}
                    rating={game.rating}
                    image={game.image}
                    tinyImage={game.imageTiny}
                    code={game.code}
                    index={index}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryGames;
