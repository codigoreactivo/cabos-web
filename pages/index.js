import NavBar from "../components/NavBar";
import SliderTop from "../components/SliderTop";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MenuCabos from "../components/MenuCabos";
import MenuCabosSub from "../components/MenuCabosSub";
import Cantina from "../components/Cantina";
import Togo from "../components/Togo";
import GridSection from "../components/GridSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar />

      <main>
        <section
          id="home"
          className="text-black h-screen bg-[#ffffff]  text-center flex justify-center items-center basis-full"
        >
          <SliderTop />
        </section>
        <section
          id="home"
          className="text-black h-screen bg-[#ffffff]  text-center flex justify-center items-center basis-full"
        >
          <HeroSection />
        </section>
        <div></div>
        <section id="menu" className=" text-white h-auto flex flex-col">
          <MenuCabos />
          <MenuCabosSub />
        </section>
        <section
          id="cantina"
          className="text-white h-screen bg-black bg-no-repeat bg-cover  text-center flex"
          style={{
            backgroundImage: "url('img/cantina.jpg')",
          }}
        >
          <Cantina />
        </section>
        <section id="togo" className=" text-white h-screen flex">
          <Togo />
        </section>
        <section className=" text-white bg-[#FC1A85] h-[30vh] flex"></section>
        <section id="gallery" className="h-[100vh]">
          <GridSection />
        </section>
      </main>
      
      <Footer />
      <div className="bg-[#FF9138] text-[#ffffff] text-center p-2">Copyright</div>
    </div>
  );
}
