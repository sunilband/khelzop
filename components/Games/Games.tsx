"use client";
import React, { useEffect, useState } from "react";
import SwiperComponent from "../Swiper/SwiperComponent";
import { useGames } from "@/context/gamesContext";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import CategoryGames from "./CategoryGames/CategoryGames";
import SwiperSkeleton from "../Skeletons/SwiperSkeleton";
import { useRouter } from "next/navigation";

type Props = {};

const Games = (props: Props) => {
  const { filteredGames, setSelectedCategory } = useGames();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const numberOfSkeletons = screenWidth > 800 ? 5 : 3;

  return (
    <div
      className={`w-full h-[92%] flex flex-col gap-4 items-center overflow-auto  sm:px-10 px-2 py-10`}
    >
      {/* skeleton */}
      {!filteredGames && Array(numberOfSkeletons).fill(<SwiperSkeleton />)}

      {/* show filtered games */}
      {filteredGames &&
        Object.keys(filteredGames).map((key, index) => {
          return (
            <div
              key={key}
              className="w-full pb-10 pt-5  px-4 rounded-lg bg-white dark:bg-darksecondary drop-shadow-md"
            >
              <div className="flex justify-between gap-2 items-center pb-5">
                <div className="flex gap-2 items-center">
                  <Image
                    src={`/icons/${key}.svg`}
                    width={40}
                    height={40}
                    alt="strategy"
                  />
                  <p className="font-extrabold tracking-wide sm:text-xl text-lg dark:text-white uppercase">
                    {key == "sportsRacing"
                      ? "Sports/Racing"
                      : key == "puzzleLogic"
                        ? "Puzzle/Logic"
                        : key}
                  </p>
                </div>

                <button
                  className="bg-primary   flex items-center text-white px-4 py-2 rounded-lg"
                  onClick={() => router.push(`/${key}`)}
                >
                  Show All
                  <div className="ml-2 bg-black rounded-full p-1">
                    <MdNavigateNext />
                  </div>
                </button>
              </div>
              <SwiperComponent
                gamesData={filteredGames[key]}
                direction={index % 2 === 0 ? 1 : -1}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Games;
