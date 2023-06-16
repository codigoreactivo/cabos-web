import React from "react";
import Image from "next/image";
import Aos from "aos";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="h-fit basis-11/12 flex flex-col md:flex-row">
      <div className="flex basis-3/5 h-auto">
        <div className="text-left sm:text-left justify-start items-start">
          <Image
            className="absolute -translate-x-2 -translate-y-2 sm:absolute sm:translate-x-0 sm:translate-y-0"
            src="/img/patron-color.png"
            width={100}
            height={20}
          />
          <h2 className="text-6xl py-8 sm:text-9xl font-[CreatoDisplay-Black]">
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
          <p className="text-md sm:text-2xl text-[#525252] font-[CreatoDisplay-Light]">
            At Los Cabos Mexican Restaurant, we proudly showcase the <br /> rich
            and diverse culinary traditions of Mexico, where every dish <br />{" "}
            is crafted with passion and an irresistible blend of spices.
          </p>
          <p className="text-lg sm:text-2xl text-[#525252] font-[CreatoDisplay-ThinItalic] my-4">
            We love what we do!
          </p>
          <Image src="/img/underline-img.png" width={100} height={20} />
        </div>
      </div>

      <div className="flex basis-2/5 h-auto">
        {" "}
        <div className="text-left sm:text-left justify-center items-start sm:p-0 pt-[3rem] ">
          <p className="text-3xl sm:text-4xl font-[CreatoDisplay-ExtraBold] text-[#525252] uppercase">
            Located in Dickinson,
            <br /> North Dakota
          </p>
          <h3 className="text-xl sm:text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
            We are open 7 days a week
          </h3>
          <h4 className="text-xl sm:text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
            hours of operation:
          </h4>
          <div className="my-4">
            <p className="text-lg sm:text-2xl font-[CreatoDisplay-Thin]">
              10:30am- 9:15pm{" "}
            </p>
            <p className="text-lg sm:text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
              Monday-Thursday
            </p>
          </div>
          <div className="my-4">
            <p className="text-lg sm:text-2xl font-[CreatoDisplay-Thin]">
              10:30am- 9:30pm{" "}
            </p>
            <p className="text-lg sm:text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
              Friday and Saturday
            </p>
          </div>
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
            <div className="my-4">
              <p className="text-lg sm:text-2xl font-[CreatoDisplay-Thin]">
                10:30am- 5:00pm{" "}
              </p>
              <p className="text-lg sm:text-2xl font-[CreatoDisplay-Bold] text-[#525252]">
                Monday-Friday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
