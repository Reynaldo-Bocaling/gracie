import React from "react";
import { motion } from "framer-motion";

const HeroContent = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {!isMobile ? (
        <>
          <div className="w-full flex items-center gap-12">
            <motion.h1
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-2/5s  font-title gradient-text text-9xl font-bold"
            >
              WELCOME
            </motion.h1>
            <motion.p
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-3/5ws text-base text-gray-300 tracking-wider leading-7"
            >
              Gracie: Pioneering Neuralink's brain transplant, the first animal
              subject unlocking new frontiers in neuroscience.
            </motion.p>
          </div>
          <div className="flex items-center gap-20 pl-12 leading-[10rem] mt-5">
            <span className="gradient-text text-12xl font-bold font-title translate-y-12">
              *
            </span>
            <motion.h1
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="w-[80%] font-title gradient-text text-10xl font-bold whitespace-nowrap"
            >
              TO GRACIE.
            </motion.h1>
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
            <motion.h1
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: [70, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className=" font-title gradient-text text-[5.2rem] font-bold whitespace-nowrap text-center pl-4"
            >
              GRACIE.
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" text-sm text-gray-300 tracking-wider w-full text-center mt-9 leading-7"
          >
            Gracie: Pioneering Neuralink's brain transplant, the first animal
            subject unlocking new frontiers in neuroscience.
          </motion.p>
        </div>
      )}
    </>
  );
};

export default HeroContent;
