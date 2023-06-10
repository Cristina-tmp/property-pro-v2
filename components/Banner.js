import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://i.redd.it/19p8jtrvbe061.jpg"
        fill
        alt="banner_image"
        className="object-cover"
      />

      <div className="absolute text-center w-full top-1/2">
        <p className="text-sm sm:text-lg">Not Sure Where To Go?</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold  my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
