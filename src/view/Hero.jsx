import React from "react";
import { sales } from "../constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeroContent from "../components/HeroContent";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="relative w-full ">
      <div className="max-w-7xl w-full mx-auto mt-7 px- absolute -top-12 md:top-12 left-1/2 -translate-x-1/2">
        <HeroContent />
      </div>
      <img
        src="/img/hero2.png"
        className="w-full h-[47rem] md:min-h-[60rem]"
        alt=""
      />
    </section>
  );
};

export default Hero;
