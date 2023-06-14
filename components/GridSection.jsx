import React from "react";
import Image from "next/image";

const GridSection = () => {
  return (
    <div>
      <div className="bg-white">
      <Image
        className=" mt-[-10] bottom-0 z-10 align-middle mx-auto "
        src="/img/border-img.png"
        width={2500}
        height={80}
      ></Image>
        <iframe
          src="https://snapwidget.com/embed/1035407"
          className="snapwidget-widget"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "auto",
          }}
        ></iframe>
      </div>
      <Image
        className=" mt-[-10] top-0 z-10 align-middle rotate-180 mx-auto "
        src="/img/border-img.png"
        width={2500}
        height={80}
      ></Image>
    </div>
  );
};

export default GridSection;
