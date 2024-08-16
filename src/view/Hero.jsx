import React from "react";
import { sales } from "../constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeroContent from "../components/HeroContent";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="max-w-7xl mx-auto mt-7 px-9">
        <HeroContent />
        <div className="flex  flex-col md:flex-row items-center gap-9 md:gap-20 mt-12">
          <div className=" flex  md:flex-col  gap-7 order-2 md:order-1">
            {sales.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-6xl font-bold">
                  {item.value}
                </h1>
                <h1 className="text-white text-sm md:text-xl">{item.label}</h1>
              </div>
            ))}
          </div>
          <div className="relative flex-1 order-1 md:order-2">
            <img
              src="/img/hero.jpg"
              className="md:h-[25rem] w-full rounded-3xl border "
              alt=""
            />
            <div className="border-rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0 rounded-r-full pl-4 pr-5 py-3 flex items-center gap-3 ">
              <h1 className="text-white text-sm md:text-2xl font-bold">
                Buy Now
              </h1>
              <MdOutlineArrowOutward className="text-[1.8rem] md:text-[2.2rem] p-2 text-[#ff1658] bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
