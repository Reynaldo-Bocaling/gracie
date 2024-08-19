import React from "react";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-7 px-9 pt-32 md:pt-40 pb-20">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-title gradient-text text-6xl md:text-7xl font-bold text-center md:text-left"
          >
            About US
          </motion.h1>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-7 mt-9 max-w-xl "
          >
            <p className="text-sm md:text-base text-center md:text-left text-gray-200 tracking-wider ">
              $ARKY is inspired by Arky, the beloved dog of Hal Finney, a
              pioneering cryptographer and potential founder of Bitcoin. This
              unique meme token celebrates Finney's legacy by merging the
              historical significance of Bitcoin with the vibrant meme culture,
              offering enthusiasts a fun and meaningful digital currency
              experience. Join us in commemorating Finney's contributions and
              embrace the innovative spirit of $ARKY.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-7 mt-12"
          >
            <a
              href="https://x.com/ModdedQuad/status/1824208235475198311"
              className="flex items-center gap-5 text-white font-semibold gradient-border pl-9 rounded-full border whitespace-nowrap hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 transition-all ease-in-out"
            >
              Buy Now
              <MdKeyboardArrowRight
                size={55}
                className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              />
            </a>
            <a href="#tokenomics" className="text-white textxl font-bold">
              Go To Tokenomics
            </a>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 mt-9 md:mt-0">
          <motion.img
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            src="/img/about2.png"
            className="w-full md:h-[25rem] rounded-3xl border border-indigo-500"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
