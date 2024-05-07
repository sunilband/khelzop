import React from "react";
import CategoryGames from "../../Games/CategoryGames/CategoryGames";

type Props = {
  category: string;
};

const CategoriesPage = ({ category }: Props) => {
  return (
    <div className="dark:bg-darkBg bg-lightBG w-screen h-screen flex justify-end items-end">
      <div
        className={`w-full h-[92%] flex flex-col gap-4 items-center overflow-auto  sm:px-10 px-2 py-10`}
      >
        <CategoryGames category={category} />
      </div>
    </div>
  );
};

export default CategoriesPage;
