"use client";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { useSidebar } from "@/context/sidebarOpenContext";

type Props = {};

const HamburgerLogo = (props: Props) => {
  const { toggleSidebar, sidebarOpen } = useSidebar();

  return (
    <MdMenuOpen
      className={`w-10 h-10 cursor-pointer  dark:invert ${sidebarOpen ? "rotate-0" : "rotate-180"}`}
      onClick={() => {
        !sidebarOpen && toggleSidebar();
      }}
    />
  );
};

export default HamburgerLogo;
