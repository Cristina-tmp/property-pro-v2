import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out cursor-pointer">
      <div className="relative h-80 w-80">
        <Image alt="property_images" src={img} fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
