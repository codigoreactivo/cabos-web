import React from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const HappyHour = () => {
  return (
    <div className="grid h-auto lg:grid-cols-[60%_minmax(0,_1fr)_100px] xl:w-[85%] lg:gap-24 gap-14 lg:text-left ">
      <div className="grid h-fit lg:justify-items-start justify-items-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-[CreatoDisplay-Black]">
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
        <p className="w-[clamp] text-3xl">
          At Los Cabos Mexican Restaurant, we proudly showcase the rich and
          diverse culinary traditions of Mexico, where every dish is crafted
          with passion and an irresistible blend of spices.
        </p>
        <p className="text-[#525252] font-[CreatoDisplay-ThinItalic] my-4">
          We love what we do!
        </p>
        <Image src="/img/underline-img.png" width={100} height={20} />
      </div>
      <div className="grid h-fit">
        <h2>
          Located in Dickinson,
          <br /> North Dakota
        </h2>
        <h3>We are open 7 days a week hours of operation:</h3>
        <ul>
          <li>10:30am- 9:15pm</li>
          <li>Monday-Thursday</li>
          <li>10:30am- 9:30pm</li>
          <li>Friday and Saturday</li>
        </ul>

        <div>
          <p className="text-6xl sm:text-6xl mt-8">
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
          <p className="font-[CreatoDisplay-Black] text-6xl sm:text-6xl text-[#525252]">
            HOUR
          </p>
          <ul>
            <li>10:30am- 5:00pm</li>
            <li>Monday-Friday</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HappyHour;
