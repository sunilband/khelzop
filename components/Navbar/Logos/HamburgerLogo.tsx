"use client";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { useSidebar } from "@/context/sidebarOpenContext";

type Props = {};

const HamburgerLogo = (props: Props) => {
  const { toggleSidebar, sidebarOpen } = useSidebar();
  return (
    <MdMenuOpen
      className={`w-10 h-10 cursor-pointer rotate-180 dark:invert ${sidebarOpen ? "rotate-0" : ""}`}
      onClick={() => toggleSidebar()}
    />
  );
};

export default HamburgerLogo;
