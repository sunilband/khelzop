import { gameRedirect } from "@/constants";

export default function Page({ params }: { params: { slug: string } }) {
  const gameCode = params.slug;
  console.log(gameRedirect + gameCode);
  return gameCode ? (
    <iframe
      title="W3Schools Free Online Web Tutorials"
      src={gameRedirect + gameCode}
      className="w-full h-full inset-0 z-[1000] border-2"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      width="500px"
      height="500px"
      allowFullScreen
    ></iframe>
  ) : (
    <div>Game not found</div>
  );
}
