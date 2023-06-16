// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MySwiperComponent() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      loop={true}
    >
      <SwiperSlide>
        <div
          className="flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover "
          style={{
            backgroundImage: "url('img/slide-11.jpg')",
          }}
        >
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mt-10 sm:mt-20 md:mt-32">
            Spice up your palate, <br /> Los Cabos awaits!
          </p>
          <div className="mt-4 sm:mt-8">
            <Image src="/img/underline-img.png" width={200} height={30} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-12.jpg')",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-13.jpg')",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-14.jpg')",
          }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
}
