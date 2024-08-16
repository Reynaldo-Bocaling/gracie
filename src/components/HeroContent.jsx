import React from "react";

const HeroContent = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {!isMobile ? (
        <>
          <div className="w-full flex items-center gap-12">
            <h1 className="w-2/5s  font-title gradient-text text-9xl font-bold">
              WELCOME
            </h1>
            <p className="w-3/5ws text-base text-gray-300 tracking-wider leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus repudiandae, impedit minus repellendus modi
              reprehenderit.
            </p>
          </div>
          <div className="flex items-center gap-20 pl-12 leading-[10rem] mt-5">
            <span className="gradient-text text-12xl font-bold font-title translate-y-12">
              *
            </span>
            <h1 className="w-[80%] font-title gradient-text text-10xl font-bold whitespace-nowrap">
              TO GRACIE.
            </h1>
          </div>
        </>
      ) : (
        <div className="mt-12">
          <h1 className="  font-title gradient-text text-6xl md:text-9xl font-bold text-center ">
            WELCOME TO
          </h1>
          <div className="relative flex items-center gap-20 mt-9">
            <span className="gradient-text text-10xl font-bold font-title absolute -top-14 -left-5">
              *
            </span>
            <h1 className=" font-title gradient-text text-8xl font-bold whitespace-nowrap text-center pl-4">
              GRACIE.
            </h1>
          </div>

          <p className=" text-sm text-gray-300 tracking-wider w-full text-center mt-9 leading-7">
            Lorem ipsum dolor sit amet consectetur adipi elit. Doloribus
            repudiandae, impedit minus repeus modi reprehenderit.
          </p>
        </div>
      )}
    </>
  );
};

export default HeroContent;
