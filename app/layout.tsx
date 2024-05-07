import { GamesProvider } from "@/context/gamesContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/context/themeContext";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarProvider } from "@/context/sidebarOpenContext";
import { SearchProvider } from "@/context/searchResultsContext";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Khelzop - The Game Store",
  description:
    "On Khelzop you can play the best free online games. Khelzop has the best online games selection of multiplayer games and single-player games.",
  keywords:
    "online games, free games, multiplayer games, single-player games, action games, adventure games, RPG, strategy games, sports games, puzzle games, racing games, kids games, mobile games, PC games, console games, game store, play games online, best online games, new games, popular games, top games , multiplayer , gamezop , games store , games , play games , play games online , play games free , play games online free , play games online free without downloading , play games online free without downloading now , play games online free without downloading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans`}>
        <ThemeProvider>
          <SearchProvider>
            <SidebarProvider>
              <GamesProvider>
                <Navbar />
                <div className="flex">
                  {/* <Sidebar /> */}
                  <Sidebar />
                  {children}
                </div>
              </GamesProvider>
            </SidebarProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
