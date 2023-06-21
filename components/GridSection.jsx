import React, { useEffect } from 'react';
import Image from "next/image";

const GridSection = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="bg-white" >
      <Image
        className=" mt-[-10] bottom-0 z-10 align-middle mx-auto "
        src="/img/border-img.png"
        width={2500}
        height={80}
      ></Image>
        <iframe src="https://snapwidget.com/embed/1036357" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{border:'none', overflow:'hidden',  width:'100%',}}></iframe>
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
