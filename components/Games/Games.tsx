import React from "react";
import GameCard from "../GameCard.tsx/GameCard";

type Props = {};

const Games = (props: Props) => {
  return (
    <div
      className={`w-full h-[92%] flex flex-col items-center overflow-auto border-red-900 px-10`}
    >
      <h1 className="mt-10">Games</h1>
      {/* show games */}
      <div className="w-full border border-green-900">
        <GameCard />
      </div>
    </div>
  );
};

export default Games;
