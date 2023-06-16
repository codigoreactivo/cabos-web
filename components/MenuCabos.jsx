import Image from "next/image";
import Link from "next/link";

const MenuCabos = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row h-full font-[MilestoneFreeVersion-Script] ">
        <div
          className="flex-1 bg-no-repeat bg-cover flex items-center justify-center"
          style={{
            backgroundImage: "url('img/menucabos-1.jpg')",
            height: "auto",
          }}
        >
          <Link href="#" className="text-6xl lg:text-8xl">
            Fresh
          </Link>
        </div>
        <div
          className="flex-1  bg-no-repeat bg-cover flex items-center justify-center "
          style={{
            backgroundImage: "url('img/menucabos-2.jpg')",
            height: "auto",
          }}
        >
          <Link href="#" className="text-6xl lg:text-8xl ">
            Traditional
          </Link>
        </div>
        <div
          className="flex-1 flex bg-no-repeat bg-cover items-center justify-center"
          style={{
            backgroundImage: "url('img/menucabos-3.jpg')",
            height: "auto",
          }}
        >
          <Link href="#" className="text-6xl lg:text-8xl">
            Tasty
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCabos;
