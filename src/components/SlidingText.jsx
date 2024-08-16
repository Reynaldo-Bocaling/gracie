import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full pu-4 overflow-hidden bg-white">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p key={i} className="text-black text-lg font-bold">
            Buy UKYO
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
