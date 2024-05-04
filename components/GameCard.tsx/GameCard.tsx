"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { gameRedirect } from "@/constants";
import { Game, useGames } from "@/context/gamesContext";

type Props = {
  name: string;
  rating: number | string;
  image: string | undefined;
  code: string;
};

const GameCard = ({ name, rating, image, code }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { filteredGames, setFilteredGames } = useGames();

  const handleLikeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLiked((prev) => !prev);
    setFilteredGames((prev: any) => {
      if (prev) {
        if (isLiked) {
          const newLiked = prev.favorites.filter(
            (game: Game) => game.code !== code,
          );
          return { ...prev, favorites: newLiked };
        } else {
          return {
            ...prev,
            favorites: [...prev.favorites, { name, rating, image, code }],
          };
        }
      }
      return prev;
    });
  };

  console.log("fav gamessss", filteredGames?.favorites);

  return (
    <Link href={`${gameRedirect + code}`}>
      <div className="w-40 group h-40 rounded-md relative">
        {isLiked && (
          <div className="p-2 bg-white rounded-full absolute top-2 right-2 z-[50]">
            <FaHeart className=" fill-red-500 z-30" onClick={handleLikeClick} />
          </div>
        )}

        <Image
          src={`${image ? image : "/images/square.png"}`}
          alt="game"
          fill
          className="rounded-md"
        />
        <div className="flex group-hover:h-full transition-all ease-in-out duration-200 justify-center w-full darkglass h-[30%] items-center z-20 absolute bottom-0 flex-col text-white rounded-b-md group-hover:rounded-md group-hover:gap-2">
          <p className="font-semibold mix-blend-difference w-full truncate text-center">
            {name || "N/A"}
          </p>
          <p className="text-sm ">Rating : {rating || "N/A"}</p>
          <div className="group-hover:block hidden z-[50]">
            {!isLiked ? (
              <FaRegHeart className="w-7 h-7" onClick={handleLikeClick} />
            ) : (
              <FaHeart
                className="w-7 h-7 fill-red-500"
                onClick={handleLikeClick}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
