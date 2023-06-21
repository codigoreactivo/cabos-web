import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const DinnerLunch = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos='zoom-in'  className="grid h-screen w-full lg:w-[80%] xl:w-[68%] lg:h-[65vh] lg:grid-cols-2 text-[#525252] lg:content-center content-evenly text-center">
      <div className="grid h-fit font-[CreatoDisplay-Black] text-8xl lg:text-8xl xl:text-9xl">
        <Link
          className="link-hov-effect"
          href="https://drive.google.com/file/d/1_K97f8I05xDTerZDxInbJxg8d6tQ_eL2/view?usp=sharing"
          target="_blank"
        >
          Dinner
        </Link>
      </div>
      <div className="grid h-fit font-[CreatoDisplay-Black] text-8xl lg:text-8xl xl:text-9xl">
        <Link
          className="link-hov-effect"
          href="https://drive.google.com/file/d/1JuL-norf8_Pstu5dUWf4CE4wrUumxQtY/view?usp=sharing"
          target="_blank"
        >
          Lunch
        </Link>
      </div>
      <div className="grid lg:col-span-2 font-[CreatoDisplay-Regular] text-[1.4rem] lg:text-[1.8rem] px-[2.2rem] leading-none sm:px-[4rem] md:px-[5rem] lg:px-[10rem] xl:px-[20-rem] 2xl:px-[15rem] lg:mt-[5rem] text-center lg:text-justify txt-align-lts-center">
        <p className="leading-none">
          From savory appetizers to mouthwatering mains, each dish is a
          harmonious blend of spices, traditional recipes, and passion.
        </p>
      </div>
      
    </div>
  );
};

export default DinnerLunch;
