import Image from "next/image";
import Link from "next/link";

const MenuCabos = () => {
  return (
    <div className="h-auto grid lg:grid-cols-3 w-full text-[6.5rem] lg:text-[7rem] font-[MilestoneFreeVersion-Script]">
      <div className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-1.jpg')",
            height: "",
          }}><Link className='link-hov-effect' href='#menu'>Fresh</Link> </div>
      <div className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-2.jpg')",
            height: "",
          }}><Link className='link-hov-effect' href='#menu'>Traditional</Link> </div>
      <div className="czm-text-sh grid bg-cover bg-no-repeat h-screen items-center justify-center" style={{
            backgroundImage: "url('img/menucabos-3.jpg')",
            height: "",
          }}> <Link className='link-hov-effect' href='#menu'>Tasty</Link> </div>
    </div>
  );
};

export default MenuCabos;
