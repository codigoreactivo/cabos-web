import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HappyHour = () => {
  return (
    <div className="grid h-auto lg:grid-cols-[60%_minmax(0,_1fr)] xl:w-[80%] 2xl:w-[90%] lg:gap-[8rem] gap-14 lg:text-left ">
      <div className="grid h-fit lg:justify-items-start justify-items-center">
        <h2 className="text-6xl leading-none md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-[CreatoDisplay-Black]">
          <Image
            className="absolute -translate-x-4 -translate-y-2 sm:absolute sm:translate-x-0 sm:translate-y-0"
            src="/img/patron-color.png"
            width={100}
            height={20}
          />
          <span className="text-[#525252]">
            Welcome <br /> to the vibrant
          </span>
          <span className="text-[#FD943B]">
            <br /> world of our
          </span>
          <span className="text-[#FC1A85]">
            <br /> cuisine!
          </span>
        </h2>
        <span className="lg:w-[85%]">
        <p className="w-[clamp] lg:text-[1.75rem] leading-none text-[#525252] font-[CreatoDisplay-Light]">
          At Los Cabos Mexican Restaurant, we proudly showcase the rich and
          diverse culinary traditions of Mexico, where every dish is crafted
          with passion and an irresistible blend of spices.
        </p>
        </span>
        <p className="text-[#525252] lg:text-[1.75rem] font-[CreatoDisplay-ThinItalic] my-4">
          We love what we do!
        </p>
        <Image src="/img/underline-img.png" width={100} height={20} />
      </div>
      <div className="grid h-fit text-[#525252]">
        <h2 className="lg:text-[2rem] leading-none font-[CreatoDisplay-Black] uppercase text-[#525252]">
          Located in Dickinson,
          <br /> North Dakota
        </h2>
        <h3 className="lg:text-[1.75rem] font-[CreatoDisplay-Bold] leading-none">
          We are open 7 days a week <br /> hours of operation:
        </h3>
        <ul className="lg:py-12 leading-none">
          <li className="lg:text-[1.75rem] font-[CreatoDisplay-Light]">10:30am- 9:15pm</li>
          <li className=" lg:text-[1.75rem] font-[CreatoDisplay-Medium]">
            Monday-Thursday
          </li>
        </ul>
        <ul className="lg:py-2 leading-none">
        <li className="lg:text-[1.75rem] font-[CreatoDisplay-Light]">10:30am- 9:30pm</li>
          <li className="lg:text-[1.75rem] font-[CreatoDisplay-Medium]">
            Friday and Saturday
          </li>
        </ul>

        <div>
          <p className="text-6xl lg:text-7xl mt-8">
            <span className="font-[MilestoneFreeVersion-Script] text-[#F71F20]">
              H
            </span>
            <span className="font-[MilestoneFreeVersion-Script] text-[#02B5E9]">
              a
            </span>
            <span className="font-[MilestoneFreeVersion-Script] text-[#FC1A85]">
              p
            </span>
            <span className="font-[MilestoneFreeVersion-Script] text-[#FD943B]">
              p
            </span>
            <span className="font-[MilestoneFreeVersion-Script] text-[#08AC55]">
              y
            </span>
          </p>
          <p className="font-[CreatoDisplay-Black] text-6xl lg:text-7xl text-[#525252]">
            HOUR
          </p>
          <ul className="leading-none">
            <li className="lg:text-[1.75rem] font-[CreatoDisplay-Light]">10:30am- 5:00pm</li>
            <li className="lg:text-[1.75rem] font-[CreatoDisplay-Medium]">Monday-Friday</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HappyHour;
