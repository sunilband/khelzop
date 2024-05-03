"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
  }, []);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <Image
        src="/icons/logo.svg"
        alt="Khelzop"
        width={40}
        height={40}
        className="shake"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <audio ref={audioRef} src="/path/to/your/audio/file.mp3" />
    </>
  );
};

export default Logo;
