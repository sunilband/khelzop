import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center justify-between text-center relative">
      <input
        type="text"
        className="sm:w-96 w-48 border rounded-full h-10 outline-none px-2 pl-4 bg-slate-100 dark:bg-darkprimary dark:text-white focus:outline-primary/50 dark:border-darkprimary transition-all ease-in-out duration-200 text-lg font-semibold"
        placeholder="Search..."
      />
      <div className="group absolute right-2 rounded-full hover:bg-slate-300 dark:hover:bg-black p-2">
        <IoSearch className="z-0 dark:fill-white" />
      </div>
    </div>
  );
};

export default SearchBar;
