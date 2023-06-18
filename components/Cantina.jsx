import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Cantina = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto lg:basis-full justify-center lg:items-end">
      <div data-aos='zoom-in'  className="flex p-14 w-[clamp] flex-col lg:mx-36 lg:mb-32 basis-[53%] h-fit lg:p-12 justify-center items-center lg:items-end  ">
        <p className=" text-justify font-[CreatoDisplay-Regular] text-xl lg:text-[1.65rem] txt-align-lts"> Step into the vibrant world of our Mexican cantina, where flavors
          dance, and fiesta comes to life. Sip on refreshing margaritas, sample
          an array of tequilas, and let the lively music transport you to the
          heart of Mexico. Our friendly and skilled bartenders are here to shake
          up your favorite drinks! ¡Viva la buena vida!</p>
        <p className="text-6xl lg:text-8xl mt-8 lg:mt-10 font-[CreatoDisplay-Black] simple-bg-uline">Cocktails</p>
      </div>
  
      <div data-aos='zoom-in'  className="flex basis-[47%] h-fit relative">
      <Image
            className="absolute lg:bottom-80 lg:right-24"
            src="/img/patron-white.png"
            width={100}
            height={20}
          />
      </div>
    </div>
  );
};

export default Cantina;
