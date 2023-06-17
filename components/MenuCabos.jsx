import Image from "next/image";
import Link from "next/link";

const MenuCabos = () => {
  return (
    <div className="h-auto grid lg:grid-cols-3 w-full text-[6rem] lg:text-[7rem] font-[MilestoneFreeVersion-Script]">
      <div className="grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-1.jpg')",
            height: "",
          }}>Fresh</div>
      <div className="grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-2.jpg')",
            height: "",
          }}>Traditional</div>
      <div className="grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-3.jpg')",
            height: "",
          }}>Tasty</div>
    </div>
  );
};

export default MenuCabos;
