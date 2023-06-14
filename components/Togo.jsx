import React from "react";
import Image from "next/image";

const Togo = () => {
  return (
    <div className="flex flex-row h-screen w-full z-10">

      <div
        className="flex flex-col justify-center w-7/12 bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url('img/togo.jpg')",
        }}
      >
      </div>
      <div className="flex flex-col justify-center w-6/12 items-center ">
      <Image
            className="absolute "
            src="/img/patron-color.png"
            width={100}
            height={20}
          ></Image>
        <h2 className="text-[#525252] text-[11.5rem] font-[CreatoDisplay-BlackItalic]">
          TOGO
        </h2>
        <p className="text-[#FF9138] font-[MilestoneFreeVersion-Script] text-[7rem] mt-[-8rem]">
          Part <span className="text-[#FC1A85]">Samplers</span>
        </p>
        <div className="flex flex-row text-[#525252] my-12">
          <Image src="/img/tel.png" width={30} height={30}></Image>
          <p className="font-[CreatoDisplay-ExtraBoldItalic] text-3xl">+1 (603) 328-9013</p>

        </div>
        <p className="font-[CreatoDisplay-Thin] text-[#525252] max-w-[70%] text-center text-2xl">
            The ultimate solution for hassle-free and delicious gatherings on
            the go! Whether you're hosting a casual get-together, a corporate
            event, or any special occasion, our Togo Party Platters are designed
            to make your party planning a breeze.
          </p>
      </div>
    </div>
  );
};

export default Togo;
