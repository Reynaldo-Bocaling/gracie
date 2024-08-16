import React from "react";
import { gallery } from "../constant";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full">
      <div className="max-w-7xl mx-auto px-7 flex flex-col items-center justify-center gap-12">
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-title gradient-text text-7xl font-bold"
        >
          Gallery
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          class="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {gallery.map((item) => (
            <div key={item.col} class="grid gap-4">
              {item.imgs.map((i, index) => (
                <div key={index}>
                  <img class="h-auto max-w-full rounded-lg" src={i} alt="" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
