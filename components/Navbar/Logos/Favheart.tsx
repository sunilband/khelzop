"use client";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

const Favheart = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      {pathname !== "/categories/favorites" && (
        <FaRegHeart
          className="h-6 w-6 hover:opacity-80 transition-all ease-in-out duration-100 cursor-pointer hover:fill-red-600 dark:fill-white sm:block hidden"
          onClick={() => router.push("/categories/favorites")}
        />
      )}
      {pathname == "/categories/favorites" && (
        <FaHeart
          className="h-6 w-6 hover:opacity-80 transition-all ease-in-out duration-100 cursor-pointer fill-red-500 sm:block hidden"
          onClick={() => router.push("/categories/favorites")}
        />
      )}
    </div>
  );
};

export default Favheart;
