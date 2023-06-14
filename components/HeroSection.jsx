import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="block w-full m-0 p-0">
      <div className="flex flex-row gap-4 sm:gap-8 lg:gap-40 justify-center items-start w-11/12">
        <div className="text-left justify-start items-start">
          <Image
            className="absolute translate-x-[-3rem] translate-y-[-3rem]"
            src="/img/patron-color.png"
            width={100}
            height={20}
          ></Image>
          <h2 className="text-left text-9xl font-[CreatoDisplay-Black]">
            <span className="text-[#525252]">
              {" "}
              Welcome <br /> to the vibrant{" "}
            </span>{" "}
            <span className="text-[#FD943B]">
              {" "}
              <br /> world of our{" "}
            </span>{" "}
            <span className="text-[#FC1A85]">
              <br /> cuisine!
            </span>
          </h2>
          <p className="text-2xl text-[#525252]">
            At Los Cabos Mexican Restaurant, we proudly showcase the <br /> rich
            and diverse culinary traditions of Mexico, where every dish <br />{" "}
            is crafted with passion and an irresistible blend of spices.
          </p>
          <p className="text-2xl text-[#525252] font-[CreatoDisplay-ThinItalic] my-4">
            We love what we do!
          </p>
          <Image src="/img/underline-img.png" width={100} height={20}></Image>
        </div>
        <div className="text-left justify-center items-start">
          <p className="text-4xl font-[CreatoDisplay-ExtraBold] text-[#525252] uppercase">
            Located in Dickinson,
            <br /> North Dakota
          </p>
          <h3 className="text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
            We are open 7 days a week
          </h3>
          <h4 className="text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
            hours of operation:
          </h4>
          <div className="my-4">
            <p className="text-2xl font-[CreatoDisplay-Thin]">
              10:30am- 9:15pm{" "}
            </p>
            <p className="text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
              Monday-Thursday
            </p>
          </div>
          <div className="my-4">
            <p className="text-2xl font-[CreatoDisplay-Thin]">
              10:30am- 9:30pm{" "}
            </p>
            <p className="text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
              Friday and Saturday
            </p>
          </div>
          <div>
            <p className="text-6xl mt-12">
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
            <p className="font-[CreatoDisplay-Black] text-6xl text-[#525252]">
              HOUR
            </p>
            <div className="my-4">
              <p className="text-2xl font-[CreatoDisplay-Thin]">
                10:30am- 5:00pm{" "}
              </p>
              <p className="text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
                Monday-Friday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
