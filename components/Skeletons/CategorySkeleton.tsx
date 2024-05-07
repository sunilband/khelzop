import React from "react";

type Props = {};

const CategorySkeleton = (props: Props) => {
  return (
    <div className="animate-pulse w-full h-full pb-10 pt-5 px-4 rounded-lg opacity-35 dark:bg-gray-400 drop-shadow-md"></div>
  );
};

export default CategorySkeleton;
