"use client";
import useSearch from "@/lib/hooks/useSearch";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

type Props = {};

const SearchBar = (props: Props) => {
  const [input, setInput] = useState("");
  // setting results to show in search results
  useSearch(input);

  return (
    <div className="flex items-center justify-between text-center relative">
      <input
        type="text"
        className="sm:w-96 w-40 border rounded-full h-10 outline-none px-2 pl-4 bg-slate-100 dark:bg-darkprimary dark:text-white focus:outline-primary/50 dark:border-darkprimary transition-all ease-in-out duration-200 text-lg font-semibold"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="group absolute right-2 rounded-full hover:bg-slate-300 dark:hover:bg-black p-2">
        {input.length === 0 && <IoSearch className="z-0 dark:fill-white" />}
        {input.length > 0 && (
          <MdOutlineClear
            className="z-0 dark:fill-white"
            onClick={() => setInput("")}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
