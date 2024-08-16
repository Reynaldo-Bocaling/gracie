import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full my-20 px-12">
      <div className="max-w-7xl mx-auto  text-white    flex flex-col gap-12 items-center justify-center">
        <h1 className="font-title gradient-text text-6xl md:text-7xl font-bold">
          TOKENOMICS
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20 rounded-3xl border-2 bg-[rgba(90,90,90,0.5)] py-20">
          {tokenomics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h1 className="text-5xl text-white font-bold">{item.value}</h1>
              <h1 className="text-2xl text-white font-bold">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
