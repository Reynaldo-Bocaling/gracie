import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { navlinks } from "../constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  const closeSidebar = () => setIsOpen(false);

  const handleSidebarClick = (e) => e.stopPropagation();

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">
        <button onClick={handleMenu}>
          <HiOutlineMenuAlt2 size={35} className="text-white" />
        </button>
        <h1 className="font-title text-sky-500 text-3xl font-bold">GRACIE</h1>

        <button className="flex items-center gap-5 text-white font-semibold gradient-border pl-9 rounded-full border">
          Buy Now
          <MdKeyboardArrowRight
            size={55}
            className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
          />
        </button>
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
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
