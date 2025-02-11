import Image from "next/image";
import bg from "../../../../public/background/aboutme-background.png";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[55%] sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-7xl sm:text8xl lg:text-8xl text-accent">
            Web3Wizard
          </h1>
          <p className="font-semibold text-foreground text-sm sm:text-lg">
            Meet The Wizard Of Web3 - Writing Code, Casting Spells, And Changing
            The Game
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
