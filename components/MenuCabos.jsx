import Image from "next/image";
import Link from "next/link";

const MenuCabos = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row h-full font-[MilestoneFreeVersion-Script] ">
        <div
          className="flex-1 bg-no-repeat bg-cover flex items-center justify-center"
          style={{
            backgroundImage: "url('img/menucabos-1.jpg')",
            height: "auto",
          }}
        >
          <p className="text-3xl lg:text-8xl">Fresh</p>
        </div>
        <div
          className="flex-1 bg-no-repeat bg-cover flex items-center justify-center "
          style={{
            backgroundImage: "url('img/menucabos-2.jpg')",
            height: "auto",
          }}
        >
          <p className="text-3xl lg:text-8xl">Traditional</p>
        </div>
        <div
          className="flex-1 flex bg-no-repeat bg-cover items-center justify-center"
          style={{
            backgroundImage: "url('img/menucabos-3.jpg')",
            height: "auto",
          }}
        >
          <a href="#">
            <p className="text-3xl lg:text-8xl">Tasty</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuCabos;
