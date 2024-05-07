import Games from "@/components/Games/Games";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="dark:bg-darkBg bg-lightBG w-screen h-screen flex justify-end items-end">
      <Games />
    </div>
  );
};

export default LandingPage;
