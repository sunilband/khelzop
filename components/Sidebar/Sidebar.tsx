"use client";
import React, { useRef } from "react";
import { useGames } from "@/context/gamesContext";
import Image from "next/image";
import { useSidebar } from "@/context/sidebarOpenContext";
import useClickOutside from "@/lib/hooks/useClickOutside";
import { excludedCategories } from "@/constants";

type Props = {};

const Sidebar = ({}: Props) => {
  const { gamesData, filteredGames, selectedCategory, setSelectedCategory } =
    useGames();
  const filteredGamesKeys = Object.keys(filteredGames || {});
  const { sidebarOpen } = useSidebar();
  const sidebarRef = useRef(null);
  useClickOutside(sidebarRef, () => {
    // Add the code you want to execute when a click outside of the Sidebar is detected
    console.log("Clicked outside of the Sidebar");
  });
  console.log("games", gamesData);
  console.log("filteredGames", filteredGames, filteredGamesKeys);
  console.log("selectedCategory", selectedCategory);
  return (
    <aside
      ref={sidebarRef}
      className={`fixed ${
        sidebarOpen ? "lg:visible" : "lg:hidden"
      } top-[3.5rem] left-0 w-64 lg:w-16 h-screen transition-all duration-200 md:hover:w-64 z-50 ${
        sidebarOpen
          ? "translate-x-0 duration-700"
          : "-translate-x-full duration-1000"
      } border-r lg:translate-x-0 bg-primary dark:bg-darkprimary`}
    >
      <div className="pb-4 overflow-y-auto overflow-x-hidden bg-bgDark">
        {/* Home  */}
        <div
          className="w-full px-1 py-2 flex items-center gap-3 hover:bg-black dark:hover:bg-primary mx-1 cursor-pointer group"
          onClick={() => setSelectedCategory(null)}
        >
          <span className="h-5 hidden group-hover:block w-[5px] rounded-md bg-gradient-to-b from-blue-500 to-purple-500"></span>
          <Image
            src={`/icons/home.svg`}
            width={20}
            height={20}
            alt="home"
            className="ml-3"
          />
          <p className="ml-3 font-bold tracking-widest text-white group-hover:translate-x-2 transition-all ease-in-out duration-200 cursor-pointer uppercase">
            Home
          </p>
        </div>

        {excludedCategories.map((category) => {
          return (
            <div
              key={category}
              className="w-full px-1 py-2 flex items-center gap-3 hover:bg-black dark:hover:bg-primary mx-1 cursor-pointer group"
              onClick={() => setSelectedCategory(category)}
            >
              <span className="h-5 hidden group-hover:block w-[5px] rounded-md bg-gradient-to-b from-blue-500 to-purple-500"></span>
              <Image
                src={`/icons/${category}.svg`}
                width={20}
                height={20}
                alt={category}
                className="ml-3"
              />
              <p className="ml-3 font-bold tracking-widest text-white group-hover:translate-x-2 transition-all ease-in-out duration-200 cursor-pointer uppercase">
                {category}
              </p>
            </div>
          );
        })}

        {/* Divider */}
        <div className="flex justify-center w-full">
          <div className="w-[80%] h-0.5 bg-gradient-to-r my-5 from-blue-500 to-purple-500"></div>
        </div>

        {/* icons based on categories from api */}
        {filteredGamesKeys.map((key) => {
          return (
            !excludedCategories.includes(key) && (
              <div
                key={key}
                className={`w-full px-1 py-2 flex items-center gap-3 hover:bg-black dark:hover:bg-primary mx-1 cursor-pointer group ${selectedCategory === key ? "bg-black dark:bg-primary" : ""}`}
                onClick={() => setSelectedCategory(key)}
              >
                <span className="h-5 hidden group-hover:block w-[5px] rounded-md bg-gradient-to-b from-blue-500 to-purple-500"></span>
                <Image
                  src={`/icons/${key}.svg`}
                  width={20}
                  height={20}
                  alt={key}
                  className="ml-3"
                />
                <p className="ml-3 font-bold tracking-widest text-white group-hover:translate-x-2 transition-all ease-in-out duration-200 cursor-pointer uppercase">
                  {key}
                </p>
              </div>
            )
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
