import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="px-5">
      {!isMobile ? (
        <>
          <div className="w-full flex items-center gap-12">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-title gradient-text text-11xl font-bold"
            >
              WELCOME
            </motion.h1>

            <motion.p
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-3/5ws text-base text-white tracking-wider leading-7 blurdy-effect border bg-[rgba(d255,255,255,0.1)] p-3"
            >
              Meet $ARKY: The playful meme token honoring Hal Finney's legacy in
              the Bitcoin world.
            </motion.p>
          </div>
          <div className="flex items-center gap-20 pl-12 leading-[10rem] mt-5">
            <span className="gradient-text text-12xl font-bold font-title translate-y-12">
              *
            </span>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="w-[80%]  text-12xl font-bold whitespace-nowrap flex"
            >
              <h1 className="font-title gradient-text pr-12"> TO</h1>{" "}
              <span className="text-[#f19b11]">$</span>{" "}
              <h1 className="font-title gradient-text">ARKY.</h1>
            </motion.div>
          </div>
        </>
      ) : (
        <div className="mt-12">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-70, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="  font-title gradient-text text-5xl md:text-9xl font-bold text-center "
          >
            WELCOME TO
          </motion.h1>
          <div className="relative flex items-center gap-20 mt-5">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="gradient-text text-10xl font-bold font-title absolute -top-14 -left-5"
            >
              *
            </motion.span>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="  text-8xl font-bold whitespace-nowrap flex"
            >
              <span className="text-[#f19b11]">$</span>{" "}
              <h1 className="font-title gradient-text">ARKY.</h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-3/5ws text-base text-white tracking-wider leading-7 blurdy-effect border bg-[rgba(d255,255,255,0.1)] p-3 mt-7"
          >
            Meet $ARKY: The playful meme token honoring Hal Finney's legacy in
            the Bitcoin world.
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default HeroContent;
