import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuCabos = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="h-auto grid lg:grid-cols-3 w-full text-[5.4rem] lg:text-[7rem] font-[MilestoneFreeVersion-Script]">
      <div
        data-aos="fade-right"
        className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center"
        style={{
          backgroundImage: "url('img/menucabos-1.jpg')",
          height: "",
        }}
      >
        <Link className="link-hov-effect" href="#menu">
          Fresh
        </Link>{" "}
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center"
        style={{
          backgroundImage: "url('img/menucabos-2.jpg')",
          height: "",
        }}
      >
        <Link className="link-hov-effect" href="#menu">
          Traditional
        </Link>{" "}
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center"
        style={{
          backgroundImage: "url('img/menucabos-3.jpg')",
          height: "",
        }}
      >
        {" "}
        <Link className="link-hov-effect" href="#menu">
          Tasty
        </Link>
      </div>
    </div>
  );
};

export default MenuCabos;
