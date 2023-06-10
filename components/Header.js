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
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  // set state
  const [searchString, setSearchString] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const router = useRouter();

  //   reset input
  const resetInput = () => {
    setSearchString("");
  };

  //   search
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchString,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  //   handle date selection

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  //   set date range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/* left logo */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          placeholder={placeholder || "Search"}
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#E63D92] text-white rounded-full p-2 cursor-pointer md:mx-2" />
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

      {/* date & calender */}
      {searchString && (
        <div className="flex flex-col col-span-3 mx-auto text-black">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#E63D92"]}
            onChange={handleSelect}
          />

          {/* num of guests */}
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-[#E63D92]"
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-[#E63D92]" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
