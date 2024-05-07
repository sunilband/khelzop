import React from "react";

type Props = {};

const SwiperSkeleton = (props: Props) => {
  return (
    <div className="animate-pulse w-full pb-10 pt-5  px-4 rounded-lg opacity-35 dark:bg-gray-400 drop-shadow-md">
      <div className="flex justify-between gap-2 items-center pb-5">
        <div className="flex gap-2 items-center w-40 h-5 bg-slate-300 rounded-lg"></div>

        <div className="flex gap-2 items-center w-28 h-5 bg-slate-300 rounded-lg"></div>
      </div>

      {/* swiper comp */}
      <div className="w-full ">
        <div className="lg:flex hidden gap-4 flex-wrap justify-between">
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
        </div>

        <div className="md:flex lg:hidden hidden gap-4 flex-wrap justify-between">
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
        </div>

        <div className="flex md:hidden gap-4 flex-wrap justify-between">
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
          <div className="w-40 h-40 bg-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSkeleton;
