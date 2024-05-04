import Image from "next/image";

type Props = {};

const GameCard = (props: Props) => {
  return (
    <div className="w-36 group h-36 rounded-md relative">
      <Image src="/images/square.png" alt="game" fill className="rounded-md" />
      <div className="flex group-hover:h-full transition-all ease-in-out duration-200 justify-center w-full darkglass h-[30%] items-center z-20 absolute bottom-0 flex-col text-white rounded-b-md group-hover:rounded-md">
        <p className="font-semibold mix-blend-difference ">Game Name</p>
        <p className="text-sm ">Rating</p>
      </div>
    </div>
  );
};

export default GameCard;
