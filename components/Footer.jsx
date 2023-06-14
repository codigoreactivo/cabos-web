import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center basis-11/12 bg-[#FF9138] h-[40vh] gap-32 mt-[-6rem]">
      <div className="flex flex-col text-white justify-center items-center">
        <Image
          src="/img/geo.png"
          width={50}
          height={50}
        ></Image>
        <p className="font-[CreatoDisplay-Thin] mt-4">43 Pelham Road Salem, NH</p>
        <p className="font-[CreatoDisplay-Black] text-3xl">+1 (603) 328-9013</p>
      </div>
      <div className="flex flex-col text-white justify-center items-center self-center">
        <Image src="/img/logo-white.png" width={280} height={50}></Image>
        <div className="flex flex-row justify-center gap-8 py-7">
          <Link href='https://www.instagram.com/loscabosfamilymexican/' target="blank"><Image src="/img/ig.png" width={20} height={20}></Image></Link>
          <Link href='https://www.facebook.com/loscabosND' target="blank"><Image src="/img/fb.png" width={20} height={20}></Image></Link>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h6 className="text-6xl uppercase font-[CreatoDisplay-Black]">
          hours of <br /> operation:
        </h6>
        <p className="font-[CreatoDisplay-Thin] text-xl">10:30am- 9:15pm Monday-Thursday</p>
        <p className="font-[CreatoDisplay-Thin] text-xl">10:30am -9:30pm Friday & Saturday</p>
      </div>
    </div>
  );
};

export default Footer;
