import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://i.redd.it/19p8jtrvbe061.jpg"
        fill
        alt="banner_image"
        className="object-cover brightness-50"
      />

      <div className="absolute text-center w-full top-[35%] ">
        <p className="text-xl sm:text-6xl text-white">Not Sure Where To Go?</p>
        <button className="text-purple-500 bg-white px-8 py-4 shadow-md rounded-full font-semibold  my-3 hover:shadow-xl active:scale-90 transition duration-150 text-md sm:text-2xl">
          {` I'm Flexible`}
        </button>
      </div>
    </div>
  );
};

export default Banner;
