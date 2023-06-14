import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center basis-11/12 bg-[#FF9138] h-[40vh] gap-32 mt-[-6rem]">
      
      <div className="flex flex-col text-white justify-center">
        <Image className="justify-center" src="/img/geo.png" width={50} height={50}></Image>
        <p className="font-[CreatoDisplay-Medium]">43 Pelham Road Salem, NH</p>
        <p className="font-[CreatoDisplay-Medium]">+1 (603) 328-9013</p>
      </div>
      <div className="flex flex-col text-white justify-center items-center self-center">
        <Image src="/img/logo-white.png" width={250} height={50}></Image>
        <div className="flex flex-row justify-center gap-8 py-7">
        <Image src="/img/ig.png" width={30} height={30}></Image>
        <Image src="/img/fb.png" width={30} height={30}></Image>
        </div>
        
      </div>
      <div className="flex flex-col text-white">
        <h6 className="text-4xl uppercase font-[CreatoDisplay-Black]">hours of <br /> operation</h6>
      </div>
      
    </div>
  );
};

export default Footer;
