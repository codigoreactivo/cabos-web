import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Update the URL without triggering a page refresh
      history.pushState(null, null, `/${sectionId}`);
    }
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1500px] m-auto flex justify-between items-center p-4 text-white">
        <Image
          src="/img/cabos-logo.png"
          width={150}
          height={20}
          onClick={() => scrollToSection("home")}
        ></Image>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden text-xl font-[CreatoDisplay-Light] gap-11 sm:flex"
        >
          <li className="p-4 " onClick={() => scrollToSection("home")}>
            <p className="cursor-pointer nav-hov-effect">Home</p>
          </li>
          <li className="p-4 " onClick={() => scrollToSection("menu")}>
            <p className="cursor-pointer nav-hov-effect">Menu</p>
          </li>
          <li className="p-4 " onClick={() => scrollToSection("cantina")}>
            <p className="cursor-pointer nav-hov-effect">Cantina</p>
          </li>
          <li className="p-4 " onClick={() => scrollToSection("togo-d")}>
            <p className="cursor-pointer nav-hov-effect">Togo</p>
          </li>
          <li className="p-4 " onClick={() => scrollToSection("gallery")}>
            <p className="cursor-pointer nav-hov-effect">Gallery</p>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#525252] text-center ease-in duration-300"
          }
        >
          <ul className="font-[CreatoDisplay-Medium]">
            <Image
              className="absolute top-10"
              src="/img/cabos-logo.png"
              width={150}
              height={20}
            ></Image>
            <li
              onClick={() => {
                scrollToSection("home");
                handleNav();
              }}
              className="p-4 text-4xl text-[#525252] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Home</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("menu");
                handleNav();
              }}
              className="p-4 text-4xl text-[#525252] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Menu</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("cantina");
                handleNav();
              }}
              className="p-4 text-4xl text-[#525252] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Cantina</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("togo-d");
                handleNav();
              }}
              className="p-4 text-4xl text-[#525252] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Togo</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("gallery");
                handleNav('');
              }}
              className="p-4 text-4xl text-[#525252] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Gallery</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
