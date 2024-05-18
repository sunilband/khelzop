"use client";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Game, useGames } from "@/context/gamesContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  rating: number | string;
  image: string | undefined;
  code: string;
};

const DataOverlay = ({ name, rating, image, code }: Props) => {
  // const toggleFromFav = useToggleFromFav();
  const [isLiked, setIsLiked] = useState(false);
  const { setFilteredGames } = useGames();

  // set isLiked if present in favorites
  useEffect(() => {
    setFilteredGames((prev: any) => {
      if (prev) {
        const isLiked = prev.favorites.find((game: Game) => game.code === code);
        setIsLiked(isLiked ? true : false);
      }
      return prev;
    });
  }, []);

  const pathname = usePathname();
  const isFavorite = pathname === "/favorites";

  const handleLikeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLiked((prev) => !prev);
    setFilteredGames((prev: any) => {
      if (prev) {
        if (isLiked) {
          const index = prev.favorites.findIndex(
            (game: Game) => game.code === code,
          );
          if (index !== -1) {
            prev.favorites.splice(index, 1); // Remove item in place
          }
          return { ...prev };
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

  return (
    <>
      {
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [2, 1] }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260 }}
          className={`p-2 bg-white rounded-full absolute top-2 right-2 z-[50] ${isLiked ? "block " : "lg:hidden"}`}
          onClick={handleLikeClick}
        >
          {isLiked && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [1.5, 1] }}
              transition={{ duration: 0.3, type: "spring", stiffness: 260 }}
              className={`${isLiked ? "block " : "lg:hidden"}`}
            >
              <FaHeart
                className=" fill-red-500 z-30"
                onClick={handleLikeClick}
              />
            </motion.span>
          )}

          {!isLiked && !isFavorite && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [1.2, 1] }}
              transition={{ duration: 0.3, type: "spring", stiffness: 260 }}
              className="block lg:hidden"
            >
              <FaRegHeart
                className=" fill-red-500 z-30"
                onClick={handleLikeClick}
              />
            </motion.span>
          )}
        </motion.div>
      }
      <div
        className="flex group-hover:h-full transition-all ease-in-out duration-200 justify-center w-full darkglass h-[30%] items-center z-20 absolute bottom-0 flex-col text-white rounded-b-md group-hover:rounded-md group-hover:gap-2"
        style={{ WebkitTextStroke: "0.08px black" }}
      >
        <p className="font-semibold mix-blend-difference w-full truncate text-center">
          {name || "N/A"}
        </p>
        <p className="text-sm ">Rating : {rating || "N/A"}</p>
        <div className="group-hover:block hidden z-[50]">
          {!isFavorite &&
            (!isLiked ? (
              <FaRegHeart
                className="w-7 h-7 hover:scale-105 hover:fill-red-500 transition-all ease-in-out  duration-200"
                onClick={handleLikeClick}
              />
            ) : (
              <FaHeart
                className="w-7 h-7 fill-red-500"
                onClick={handleLikeClick}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DataOverlay;
