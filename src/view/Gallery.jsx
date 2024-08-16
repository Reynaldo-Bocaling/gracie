import React from "react";
import { gallery } from "../constant";

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full">
      <div className="max-w-7xl mx-auto px-7 flex flex-col items-center justify-center gap-12">
        <h1 className="font-title gradient-text text-7xl font-bold">Gallery</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div key={item.col} class="grid gap-4">
              {item.imgs.map((i, index) => (
                <div key={index}>
                  <img class="h-auto max-w-full rounded-lg" src={i} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
