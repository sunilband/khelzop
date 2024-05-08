import React from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./Navbar.css";
import Logo from "./Logos/Logo";
import Toggle from "./Toggle/Toggle";
import Link from "next/link";
import SearchBar from "./SearchBar/SearchBar";
import HamburgerLogo from "./Logos/HamburgerLogo";
import Favheart from "./Logos/Favheart";
import SearchResults from "../SearchResults/SearchResults";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed flex justify-between w-screen glass dark:bg-black p-2 z-20">
      <article className="flex gap-2 w-fit items-center">
        <HamburgerLogo />
        <div className="sm:scale-100 scale-75 ml-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <Link href="/">
            <h1 className="font-[900] sm:text-xl text-lg tracking-wider uppercase text-primary cursor-pointer">
              Khelzop
            </h1>
            <p className="font-medium text-sm -mt-2 cursor-pointer  dark:text-white">
              Fun Unlimited
            </p>
          </Link>
        </div>
      </article>

      <article className="flex sm:-ml-16 gap-2 w-fit items-center">
        <SearchBar />
      </article>

      <article className="flex gap-2 w-fit items-center">
        <Favheart />
        <div className="sm:block hidden">
          <Toggle />
        </div>
      </article>

      <article className="absolute left-1/2 right-1/2">
        <SearchResults />
      </article>
    </nav>
  );
};

export default Navbar;
