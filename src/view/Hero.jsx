import React from "react";
import { sales } from "../constant";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeroContent from "../components/HeroContent";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="max-w-7xl mx-auto mt-7 px-9">
        <HeroContent />

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2 }}
          className="relative w-full mt-12"
        >
          <img
            src="/img/hero.jpg"
            className="md:h-[30rem] w-full rounded-3xl border "
            alt=""
          />
          <div className="border-rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0 rounded-r-full pl-4 pr-5 py-3 flex items-center gap-3 ">
            <h1 className="text-white text-sm md:text-2xl font-bold">
              Buy Now
            </h1>
            <MdOutlineArrowOutward className="text-[1.8rem] md:text-[2.2rem] p-2 text-[#ff1658] bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
