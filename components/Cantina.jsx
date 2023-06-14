import React from "react";
import Image from "next/image";

const Cantina = () => {
  return (
    <div className="flex flex-col md:flex-row  basis-full">
      <div className=" flex flex-col md:w-1/2 w-2/4 p-4 justify-end items-end pb-20">
        {/* Contenido de la primera columna */}
        <p className="font-[CreatoDisplay-Light] text-[1.5rem] text-justify ml-[6rem]">
          Step into the vibrant world of our Mexican cantina, where flavors
          dance, and fiesta comes to life. Sip on refreshing margaritas, sample
          an array of tequilas, and let the lively music transport you to the
          heart of Mexico. Our friendly and skilled bartenders are here to shake
          up your favorite drinks! ¡Viva la buena vida!
        </p>
        <p className="font-[CreatoDisplay-Black] text-[7rem]">Cocktails</p>
        <Image className="mr-[12rem]" src="/img/underline-img.png" width={120} height={30}></Image>
      </div>
      <div className="md:w-1/2 w-2/4  p-4">
        {/* Contenido de la segunda columna */}
        <Image src="/img/patron-white.png" width={100} height={20}></Image>
      </div>
    </div>
  );
};

export default Cantina;
