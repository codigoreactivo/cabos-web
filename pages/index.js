import NavBar from "../components/NavBar";
import SliderTop from "../components/SliderTop";
import Footer from "../components/Footer";
import MenuCabos from "../components/MenuCabos";
import MenuCabosSub from "../components/MenuCabosSub";
import Cantina from "../components/Cantina";
import PartySamplers from "../components/PartySamplers";
import GridSection from "../components/GridSection";
import HappyHour from "../components/HappyHour";
import Welcome from "../components/Welcome";
import { Link } from "react-scroll";
import Image from "next/image";
import React from "react";

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
          className="text-black h-fit md:h-screen bg-[#ffffff] lg:text-left text-center flex justify-center items-center basis-full p-12"
        >
          <HappyHour />
        </section>
        <section
          id="home"
          className="text-black h-auto md:h-screen bg-[#ffffff]  text-center flex justify-center items-center basis-full"
        >
          <Welcome />
        </section>

    
        <section
          
          className=" text-white h-auto flex flex-col basis-full"
        >
          <MenuCabos />
          <MenuCabosSub />
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
        <section id="togo" className=" text-white h-screen flex basis-full">
          <PartySamplers />
        </section>
        <section className=" text-white bg-[#FC1A85] h-[30vh] flex basis-full"></section>
        <section id="gallery" className="h-auto">
          <GridSection />
        </section>
      </main>

      <footer className="h-auto">
        <Footer />
        <div className="bg-[#FF9138] text-[#ffffff] text-center text-base p-2 font-[CreatoDisplay-Thin] basis-full">
          Site by art{" "}
          <a href="#" className="font-[CreatoDisplay-Medium]">
            Creativos Asociados
          </a>{" "}
          | D'MNT
        </div>
      </footer>
    </div>
  );
}
