import Image from "next/image";
import Link from "next/link";
import { gameRedirect } from "@/constants";
import DataOverlay from "./DataOverlay";
import { motion } from "framer-motion";

type Props = {
  name: string;
  rating: number | string;
  image: string | undefined;
  tinyImage: string | undefined;
  code: string;
  index?: number;
};

const GameCard = ({ name, rating, image, tinyImage, code, index }: Props) => {
  return (
    <Link href={`${gameRedirect + code}`}>
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.1,
          delay: 0.05 * (index || 1),
          type: "spring",
          stiffness: 260,
        }}
        className="w-40 group h-40 rounded-md relative overflow-hidden hover:ring-2 ring-primary "
      >
        <Image
          src={`${image ? image : "/images/square.png"}`}
          alt="game"
          // fill
          width={170}
          height={170}
          className="rounded-md"
          //use blur
          // blurDataURL={`${tinyImage ? tinyImage : "/images/square.png"}`}
          // placeholder="blur"
          quality={30}
          // sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
        />

        <DataOverlay name={name} rating={rating} image={image} code={code} />
      </motion.div>
    </Link>
  );
};

export default GameCard;
