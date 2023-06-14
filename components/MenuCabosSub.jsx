import React from "react";

const MenuCabosSub = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-8 lg:gap-10 justify-center items-center text-black h-[32rem] py-24">
        <div className="flex flex-row gap-4 justify-between items-center w-6/12 font-[CreatoDisplay-Black] ">
          <div className=" text-center text-9xl justify-start text-[#525252]">
            <a href="https://drive.google.com/file/d/1_K97f8I05xDTerZDxInbJxg8d6tQ_eL2/view?usp=sharing" target="blank">Dinner</a>
          </div>
          <div className="text-center text-9xl font-black text-[#525252]">
            <a href="https://drive.google.com/file/d/1JuL-norf8_Pstu5dUWf4CE4wrUumxQtY/view?usp=sharing" target="blank">Lunch</a>
          </div>
        </div>
        <div>
          <p className="text-[#525252] text-3xl font-[CreatoDisplay-Thin] text-center py-12 ">
            From savory appetizers to mouthwatering mains, each dish is a <br />
            harmonious blend of spices, traditional recipes, and passion
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCabosSub;
