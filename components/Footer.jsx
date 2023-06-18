import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center basis-full bg-[#FF9138] h-[auto] lg:h-auto gap-6 lg:gap-32  py-10">
      <div className="flex flex-col text-white justify-center items-center">
        <Image src="/img/geo.png" width={50} height={50}></Image>
        <p className="font-[CreatoDisplay-Thin] mt-4">583 12th Dt W, Dickinson, ND 58601</p>
        <Link href='tel:+1(701)483-1841'><p className="font-[CreatoDisplay-Black] text-3xl">+1 (701) 483-1841</p></Link>
      </div>
      <div className="flex flex-col text-white justify-center items-center self-center">
        <Image src="/img/logo-white.png" width={280} height={50}></Image>
        <div className="flex flex-row justify-center gap-8 py-7">
          <Link href="https://www.instagram.com/loscabosfamilymexican/" target="_blank">
            <Image src="/img/ig.png" width={20} height={20}></Image>
          </Link>
          <Link href="https://www.facebook.com/loscabosND" target="_blank">
            <Image src="/img/fb.png" width={20} height={20}></Image>
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h6 className="text-3xl lg:text-6xl uppercase font-[CreatoDisplay-Black]">
          hours of <br /> operation:
        </h6>
        <p className="font-[CreatoDisplay-Thin] text-base lg:text-xl">10:30am - 9:15pm Monday-Thursday</p>
        <p className="font-[CreatoDisplay-Thin] text-base lg:text-xl">10:30am - 9:30pm Friday & Saturday</p>
      </div>
    </div>
  );
};

export default Footer;
