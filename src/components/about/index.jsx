import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-1 sm:py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl w-full text-center sm:text-left capitalize text-accent">
            CodeMage’s Journey
          </h2>
          <p className="font-light text-sm md:text-base">
            As a self-taught sorcerer of the digital realm, I weave magic with
            HTML, CSS, and JavaScript, crafting enchanting interfaces with
            React.js and Tailwind CSS. My back-end incantations harness Node.js,
            Express, and MongoDB to summon data from the ether. Now, my path
            leads into the Web3 dimension, where I seek new spells to shape the
            decentralized future. The quest for knowledge never ends.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xs:col-span-6 flex lg:col-span-4 text-accent"
          }
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Languages</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xs:col-span-6 flex lg:col-span-4 text-accent"
          }
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">Years self-taught</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-fit"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rickylambert87&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Github-Stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-full"
            src="https://github-readme-stats.vercel.app/api?username=rickylambert87&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Github-Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,nodejs,npm,bun,deno,nextjs,threejs,postgres,postman,py,express,git,github,mongodb,heroku,vite,vscode,windows,apple,remix,solidity,sass,netlify,ps,pr,redis"
            alt="Github-Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=rickylambert87&repo=little-sprouts-co&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="Github-Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=rickylambert87&repo=Living-Life-On-The-Veg&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=falsedescription_lines_count=2"
            alt="Github-Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
