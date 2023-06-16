import React from "react";
import Image from "next/image";

const Cantina = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row basis-full justify-end">
      <div className=" flex flex-col md:basis-3/6 basis-3/6 p-4 justify-end items-end pb-20">
        {/* Contenido de la primera columna */}
        <p className="font-[CreatoDisplay-Light] text-[1.5rem] text-justify pl-0 sm:pl-[7rem] ">
          Step into the vibrant world of our Mexican cantina, where flavors
          dance, and fiesta comes to life. Sip on refreshing margaritas, sample
          an array of tequilas, and let the lively music transport you to the
          heart of Mexico. Our friendly and skilled bartenders are here to shake
          up your favorite drinks! ¡Viva la buena vida!
        </p>
        <p className="font-[CreatoDisplay-Black] text-left sm:text-center text-[3.5rem] sm:text-9xl justify-center">Cocktails</p>
        <Image className="mr-[12rem]" src="/img/underline-img.png" width={120} height={30}></Image>
      </div>
      <div className="md:basis-3/6 basis-3/6 p-4">
        {/* Contenido de la segunda columna */}
        <Image src="/img/patron-white.png" width={100} height={20}></Image>
      </div>
    </div>
  );
};

export default Cantina;
