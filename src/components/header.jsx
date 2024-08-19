import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { navlinks, socials } from "../constant";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  const closeSidebar = () => setIsOpen(false);

  const handleSidebarClick = (e) => e.stopPropagation();

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [-50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
      className="relative w-full z-50"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
        <button onClick={handleMenu}>
          <HiOutlineMenuAlt2 size={35} className="text-white" />
        </button>

        <div className="flex items-center gap-1">
          <img src="/img/logo.png" className="w-14" alt="" />
          <h1 className="gradient-text font-title text-2xl font-bold">ARKY</h1>
        </div>

        <div className="md:flex items-center md:gap-7">
          <ul className="hidden md:flex items-center gap-x-5">
            {socials.map((item, index) => (
              <li key={index}>
                <a href={item.url}>
                  <img src={item.img} className="w-10" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://x.com/ModdedQuad/status/1824208235475198311"
            className="flex items-center gap-5 text-white font-semibold gradient-border pl-7 rounded-full border whitespace-nowrap hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 transition-all ease-in-out"
          >
            Buy Now
            <MdKeyboardArrowRight
              size={55}
              className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full "
            />
          </a>
        </div>
      </nav>

      {isOpen && (
        <nav
          className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] z-50"
          onClick={closeSidebar}
        >
          <div
            className="h-screen w-[22rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4"
            onClick={handleSidebarClick}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-title text-white text-4xl font-bold">
                GRACIE
              </h1>
              <button onClick={closeSidebar}>
                <LiaTimesSolid size={35} className="text-white" />
              </button>
            </div>

            <ul className="w-full flex flex-col items-center justify-center gap-9 mt-12">
              {navlinks.map((item, index) => (
                <li onClick={closeSidebar}>
                  <a
                    href={item.url}
                    className="text-2xl text-white font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <a
                href="https://x.com/ModdedQuad/status/1824208235475198311"
                className="flex items-center gap-5 text-white font-semibold gradient-border pl-9 rounded-full border mt-20 whitespace-nowrap"
              >
                Buy Now
                <MdKeyboardArrowRight
                  size={55}
                  className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                />
              </a>
              <ul className="flex items-center gap-x-12 md:hidden">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>
                      <img src={item.img} className="w-16" />
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
