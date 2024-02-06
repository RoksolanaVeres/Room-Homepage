import { furniture } from "../data";

export default function AboutBlock() {
  return (
    <>
      <div className="bg-about-dark h-[240px] lg:h-[450px] xl:h-[265px] xl:col-span-5 bg-no-repeat bg-cover bg-center"></div>
      <div
        id="container--about_furniture"
        className="bg-white py-12 px-7 xl:col-span-6 xl:px-12"
      >
        <h2 className="font-bold text-base leading-none uppercase tracking-widest">
          {furniture[3].header}
        </h2>
        <p className="pt-5 text-sm text-darkGray xl:text-base">
          {furniture[3].description}
        </p>
      </div>
      <div className="bg-about-light lg:h-[450px] h-[225px] xl:h-[265px] xl:col-span-5 bg-no-repeat bg-cover bg-center"></div>
    </>
  );
}
