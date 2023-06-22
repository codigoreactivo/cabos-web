import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Togo = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex h-auto flex-col-reverse  lg:flex-row lg:basis-[100%] justify-center items-center ">
      <div
        className="flex flex-col-reverse lg:flex-col basis-[53%] h-screen lg:auto bg-cover bg-center"
        style={{
          backgroundImage: "url('img/togo.jpg')",
        }}
      >
        <div className=" h-screen lg:h-auto w-full bg-center bg-cover" style={{
          backgroundImage: "url('img/togo.jpg')",
        }}></div>
      </div>
      <div
        id="togo-m"
        data-aos="zoom-in-down"
        className="flex basis-[47%] flex-col lg:h-fit h-auto justify-items-center items-center lg:py-0 py-[10rem]"
      >
        <Image
          className="absolute -translate-x-[28rem] -translate-y-[-4rem]"
          src="/img/patron-color.png"
          width={120}
          height={20}
        />
        <h2 className="text-[#525252] text-8xl lg:text-9xl  xl:text-[11rem] font-[CreatoDisplay-BlackItalic]">
          TOGO
        </h2>
        <p className="text-[#FF9138] font-[MilestoneFreeVersion-Script]  text-6xl lg:text-7xl xl:text-[6.7rem] lg:mt-[-4rem] mt-[-2rem] lg:pb-4">
          Party <span className="text-[#FC1A85]">Samplers</span>
        </p>
        <div className="flex flex-row text-[#525252] lg:my-12  py-14 ">
          <Image src="/img/tel.png" width={30} height={30} />
          <Link href="tel:+1(701)483-1841">
            <p className="font-[CreatoDisplay-BlackItalic] text-4xl lg:text-5xl">
              +1 (701) 483-1841
            </p>
          </Link>
        </div>
        <p className="font-[CreatoDisplay-Regular] text-[#525252] max-w-[68%] text-justify txt-align-lts-center text-xl lg:text-2xl lg:pt-4">
          The ultimate solution for hassle-free and delicious gatherings on the
          go! Whether you're hosting a casual get-together, a corporate event,
          or any special occasion, our Togo Party Platters are designed to make
          your party planning a breeze.
        </p>
      </div>
    </div>
  );
};

export default Togo;
