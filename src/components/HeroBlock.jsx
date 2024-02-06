import GalleryButtons from "../components/GalleryButtons";
import Header from "../components/Header";
import { useState } from "react";
import { ArrowIcon } from "../components/Icons";
import { furniture } from "../data";

export default function HeroBlock({ menuOpen, setMenuOpen }) {
  const [pageNum, setPageNum] = useState(0);
  return (
    <>
      <div
        id="container--hero"
        className={`px-6 py-11 xl:col-span-9 ${furniture[pageNum].picture} h-[365px] xl:p-16 sm:h-[450px] xl:h-[545px] bg-no-repeat bg-cover bg-center relative`}
      >
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <GalleryButtons
          setPageNum={setPageNum}
          className="flex bottom-0 right-0 xl:hidden absolute"
        />
      </div>
      <div
        id="container--hero-description"
        className="bg-white py-12 px-7 xl:pt-6 xl:col-span-7 xl:flex xl:justify-center xl:items-center relative"
      >
        <div className="xl:w-3/4">
          <h1 className="font-bold text-3xl leading-none xl:text-[40px]">
            {furniture[pageNum].header}
          </h1>
          <p className="pt-5 pb-10 text-sm text-darkGray xl:text-base">
            {furniture[pageNum].description}
          </p>
          <div className="flex gap-4 items-center">
            <a href="#" className="uppercase font-bold tracking-[10px]">
              Shop now
            </a>
            <ArrowIcon />
          </div>
        </div>
        <GalleryButtons
          setPageNum={setPageNum}
          className="hidden bottom-0 left-0 xl:flex absolute"
        />
      </div>
    </>
  );
}
