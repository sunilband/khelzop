"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Styles.css";
import GameCard from "../GameCard.tsx/GameCard";
import { Game } from "@/context/gamesContext";
import { Navigation, Autoplay } from "swiper/modules";

type Props = {
  gamesData: Game[] | null;
  direction?: number;
};

const SwiperComponent = (props: Props) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={6}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        reverseDirection: props.direction === 1 ? false : true,
      }}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
          centeredSlidesBounds: true,
        },

        // when window width is >= 480px
        560: {
          slidesPerView: 3,
          spaceBetween: 5,
        },

        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 6,
          spaceBetween: 5,
        },
      }}
    >
      {props.gamesData?.map((game, index) => (
        <SwiperSlide key={index}>
          <GameCard
            name={game.name}
            rating={game.rating}
            image={game.image}
            code={game.code}
            index={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
