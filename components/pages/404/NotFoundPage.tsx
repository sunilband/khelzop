"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./404.json";
import Link from "next/link";

type Props = {};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const NotFoundPage = (props: Props) => {
  return (
    <div className="dark:bg-darkBg bg-lightBG w-screen h-screen flex flex-col justify-center items-center px-3">
      <Lottie options={defaultOptions} height={350} width={350} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-primary">404 Not Found</h1>
        <p className="text-lg font-semibold dark:text-white text-center">
          Our Game Guys are on a break , will build this page soon
        </p>
        <Link href="/">
          <p className="text-lg font-semibold text-primary cursor-pointer underline">
            Go back home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
