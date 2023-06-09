import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, desc, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative min-w-[300px] h-96 sm:h-[620px]">
        <Image
          src={img}
          alt="large_card_image.jpeg"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-7xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-lg mt-3 text-white">{desc}</p>

        <button className="text-sm md:text-lg text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {" "}
          {buttonText}{" "}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
