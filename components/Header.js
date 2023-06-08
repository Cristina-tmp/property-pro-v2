import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [searchString, setSearchString] = useState();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/property-pro-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="object-fit object-left"
        />
      </div>

      {/* search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          type="text"
          name="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search your dream home..."
          className="pl-5 bg-transparent outline-none flex-grow text-grey-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right side */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer " />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
