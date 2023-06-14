// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-11.jpg')",
          }}
        >
          <p className="text'3xl text-white"></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-12.jpg')",
          }}
        >
          Hola
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-13.jpg')",
          }}
        >
          Hola
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('img/slide-14.jpg')",
          }}
        >
          Hola
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
