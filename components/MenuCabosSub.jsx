import React from "react";
import Image from "next/image";

const MenuCabosSub = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black py-10 sm:py-20 lg:py-32 mt-10">
      <div className="flex flex-col gap-4 justify-center items-center font-[CreatoDisplay-Black]">
        <div className="text-center text-4xl sm:text-9xl text-[#525252]">
          <a href="https://drive.google.com/file/d/1_K97f8I05xDTerZDxInbJxg8d6tQ_eL2/view?usp=sharing" target="_blank">Dinner</a>
        </div>
        <div className="text-center text-4xl sm:text-9xl font-black text-[#525252]">
          <a href="https://drive.google.com/file/d/1JuL-norf8_Pstu5dUWf4CE4wrUumxQtY/view?usp=sharing" target="_blank">Lunch</a>
        </div>
      </div>
      <div>
        <p className="text-[#525252] text-2xl sm:text-3xl font-[CreatoDisplay-Thin] text-center py-6 sm:py-12">
          From savory appetizers to mouthwatering mains, each dish is a harmonious blend of spices, traditional recipes, and passion
        </p>
      </div>
      <div className="relative">
        <Image className="absolute right-0" src="/img/patron-color.png" width={100} height={20} />
      </div>
    </div>
  );
};

export default MenuCabosSub;
