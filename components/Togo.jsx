import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import "aos/dist/aos.css";


const Togo = () => {
  return (
    <div className='grid h-auto lg:grid-cols-[53%_minmax(0,_1fr)] w-full items-center '>
        <div className='grid h-screen bg-cover bg-center' style={{
            backgroundImage: "url('img/togo.jpg')",
          }}></div>
        <div className='grid lg:h-fit h-auto justify-items-center items-center lg:py-0 py-[10rem]'>
        <Image
            className="absolute -translate-x-[28rem] -translate-y-[-4rem]"
            src="/img/patron-color.png"
            width={120}
            height={20}
          />
          <h2 className="text-[#525252] text-8xl lg:text-9xl  xl:text-[11rem] font-[CreatoDisplay-BlackItalic]">
            TOGO
          </h2>
          <p className="text-[#FF9138] font-[MilestoneFreeVersion-Script]  text-6xl lg:text-7xl xl:text-[6.7rem] lg:mt-[-4rem] mt-[-2rem] lg:pb-4">
            Party <span className="text-[#FC1A85]">Samplers</span>
          </p>
          <div className="flex flex-row text-[#525252] lg:my-12  py-14 ">
            <Image src="/img/tel.png" width={30} height={30} />
            <Link href="tel:+1(701)483-1841">
              <p className="font-[CreatoDisplay-BlackItalic] text-4xl lg:text-5xl">
                +1 (701) 483-1841
              </p>
            </Link>
          </div>
          <p className="font-[CreatoDisplay-Regular] text-[#525252] max-w-[68%] text-justify txt-align-lts text-xl lg:text-2xl lg:pt-4">
            The ultimate solution for hassle-free and delicious gatherings on
            the go! Whether you're hosting a casual get-together, a corporate
            event, or any special occasion, our Togo Party Platters are designed
            to make your party planning a breeze.
          </p>
        </div>
    </div>
  )
}

export default Togo