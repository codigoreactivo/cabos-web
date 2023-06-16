import Image from "next/image";
import Link from "next/link";
import React from "react";

const Togo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div
        className="w-full md:w-[54%] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('img/togo.jpg')",
        }}
      ></div>
      <div className="w-full md:w-[46%] flex flex-col justify-center items-center">
        <Image
          className="absolute -translate-x-[28rem] -translate-y-[-4rem]"
          src="/img/patron-color.png"
          width={120}
          height={20}
        />
        <h2 className="text-[#525252] text-[6.2rem] md:text-[12rem] font-[CreatoDisplay-BlackItalic]">
          TOGO
        </h2>
        <p className="text-[#FF9138] font-[MilestoneFreeVersion-Script] text-[4rem] sm:text-[8rem] mt-[-4.5rem] sm:mt-[-8rem]">
          Part <span className="text-[#FC1A85]">Samplers</span>
        </p>
        <div className="flex flex-row text-[#525252] my-12">
          <Image src="/img/tel.png" width={30} height={30} />
          <Link href='tel:+1(701)483-1841'>
          <p className="font-[CreatoDisplay-ExtraBoldItalic] text-3xl">
            +1 (701) 483-1841
          </p>
        </Link>
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
