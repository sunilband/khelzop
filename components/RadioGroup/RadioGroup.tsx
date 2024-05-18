import React from "react";
import "./RadioGroup.css";
import { MdNavigateNext } from "react-icons/md";
import { Game } from "@/context/gamesContext";
import { gameRedirect } from "@/constants";

type Props = {
  games: Game[];
};

const RadioGroup = ({ games }: Props) => {
  games = games?.slice(0, 5);
  return (
    <div className="md:block hidden">
      <fieldset>
        {games.map((game, index) => {
          return (
            <label
              key={index}
              style={
                {
                  "--_img": `url(${game.imageCover})`,
                } as React.CSSProperties
              }
              className="flex h-full items-center overflow-hidden "
            >
              {/* data div */}
              <div className="selected-image flex-col items-start py-5 gap-1  transition-all w-[50%] h-full px-2 darkTextBg ">
                <p
                  className="text-white font-bold text-lg"
                  style={{ WebkitTextStroke: "0.1px black" }}
                >
                  {game.name}
                </p>
                {/*  */}

                <p
                  className="text-white text-sm font-light"
                  style={{ WebkitTextStroke: "0.1px black" }}
                >
                  {game.description}
                </p>

                <a
                  className="bg-primary flex items-center text-white px-4 py-2 rounded-lg justify-self-end z-[1000]"
                  href={`${gameRedirect + game.code}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Play
                  <div className="ml-2 bg-black rounded-full p-1">
                    <MdNavigateNext />
                  </div>
                </a>
              </div>
              <input
                type="radio"
                name="images"
                value="Fiddle Leaf"
                defaultChecked={index === 2}
              />
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default RadioGroup;
