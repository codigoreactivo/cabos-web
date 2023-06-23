import NavBar from "../components/NavBar";
import SliderTop from "../components/SliderTop";
import Footer from "../components/Footer";
import MenuCabos from "../components/MenuCabos";
import Cantina from "../components/Cantina";
import Togo from "../components/Togo";
import GridSection from "../components/GridSection";
import HappyHour from "../components/HappyHour";
import { Link } from "react-scroll";
import Image from "next/image";
import React, { useEffect } from "react";
import DinnerLunch from "../components/DinnerLunch";

export default function Home() {
  
  return (
    <div>
      <NavBar />

      <main className="h-fit">
        <section
          id="home"
          className="text-black h-screen bg-[#ffffff]  text-center flex justify-center items-center basis-full"
        >
          <SliderTop />
        </section>
        <section
          id="home"
          className="text-black h-fit md:h-fit bg-[#ffffff] lg:text-left text-center relative flex justify-center items-center basis-full lg:p-12 p-[1.8rem]"
        >
          <Image
            className="absolute w-[15%] top-4 sm:top-36 sm:left-20 md:top-4 md:left-14 lg:top-36 lg:left-24 lg:w-fit"
            src="/img/patron-color.png"
            width={100}
            height={20}
          />
          <HappyHour />
        </section>

        <section className=" text-white h-auto flex flex-col basis-full">
          <MenuCabos />
        </section>
        <section
          id="menu"
          className=" h-fit relative grid w-full justify-items-center items-center"
        >
          <Image
            className="absolute w-[15%] bottom-2 lg:right-24 lg:bottom-24 lg:w-fit"
            src="/img/patron-color.png"
            width={120}
            height={20}
          />
          <DinnerLunch />
        </section>
        <section
          id="cantina"
          className="text-white h-screen bg-black bg-no-repeat bg-cover  text-center basis-full flex bg-center"
          style={{
            backgroundImage: "url('img/cantina.jpg')",
          }}
        >
          <Cantina />
        </section>

        <section
          id="togo-d"
          className=" h-auto flex justify-center items-center basis-full"
        >
          <Togo />
        </section>
        <section className=" text-white bg-[#FC1A85] h-[30vh] flex basis-full"></section>
        <section id="gallery" className="h-auto">
          <GridSection />
        </section>
      </main>

      <footer className=" block h-auto">
        <Footer />
        <div className="bg-[#FF9138] text-[#ffffff] text-center text-base p-2 font-[CreatoDisplay-Thin] basis-full">
          Site by art{" "}
          <Link href="#" className="font-[CreatoDisplay-Medium]">
            Creativos Asociados{" "}
          </Link>
          | D'MNT
        </div>
      </footer>
    </div>
  );
}
