"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  religions,
  holyPlacesData,
} from "./Data/holyPlaces";
import {
  holidayCategories,
  holidayPlacesData,
} from "./Data/holidayPlaces";

export default function Navbar() {
  const [showHolyPlaces, setShowHolyPlaces] = useState(false);
  const [selectedReligion, setSelectedReligion] = useState("Hindu");
  const currentTemples =holyPlacesData[selectedReligion as keyof typeof holyPlacesData].temples;
  const currentImages = holyPlacesData[selectedReligion as keyof typeof holyPlacesData].images;
  const dropdownRef = useRef<HTMLDivElement>(null);
  

  const [showHoliday, setShowHoliday] = useState(false);

  const [selectedHoliday, setSelectedHoliday] =
    useState("South Africa");
    const currentPlaces =
  holidayPlacesData[
    selectedHoliday as keyof typeof holidayPlacesData
  ].places;

const currentHolidayImages =
  holidayPlacesData[
    selectedHoliday as keyof typeof holidayPlacesData
  ].images;


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowHolyPlaces(false);
setShowHoliday(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="absolute top-8 left-12 right-12 z-50 flex items-center justify-between">
        <Image
          src="/logo-white.png"
          alt="Travel World"
          width={123}
          height={36}
        />

        <ul className="flex gap-10 text-white/90 text-sm font-semibold">
          <li className="flex items-center gap-2 cursor-pointer">
            <Image src="/airplane.svg" alt="Flight" width={20} height={20} />
            Flight
          </li>

          <li className="flex items-center gap-2 cursor-pointer">
            <Image src="/train.svg" alt="Train" width={20} height={20} />
            Train
          </li>

<li
  onMouseEnter={() => {
    setShowHolyPlaces(false);
    setShowHoliday(true);
  }}
  className="flex items-center gap-2 cursor-pointer"
>
  <Image src="/holiday.svg" alt="Holiday" width={20} height={20} />
  Holiday
</li>
       <li
  onMouseEnter={() => {
    setShowHoliday(false);
    setShowHolyPlaces(true);
  }}
  className="flex items-center gap-4 cursor-pointer"
>
  <Image
    src="/holy-places.svg"
    alt="Holy Places"
    width={20}
    height={20}
  />

  <span>Holy Places</span>

  <Image
    src="/holyplaces-arrow.svg"
    alt="arrow"
    width={10}
    height={5}
  />
</li>
        </ul>

        <button className="w-40 h-12 bg-white text-black text-sm font-medium rounded-lg flex items-center justify-center">
          Login / Sign up
        </button>
      </nav>

      {showHolyPlaces && (
        <div
  ref={dropdownRef}
  onMouseLeave={() => setShowHolyPlaces(false)}
  className="absolute top-24 left-1/2 -translate-x-1/2 z-50 flex bg-white rounded-lg shadow-lg overflow-hidden"
>
          {/* LEFT COLUMN */}
          <div className="w-72 border-r border-gray-200">
           {religions.map(
              (item) => (
                <div
  key={item}
  onMouseEnter={() => setSelectedReligion(item)}
  className="group h-12 px-6 flex items-center justify-between text-sm font-semibold cursor-pointer"
>
                  <span className="text-[#112211] group-hover:text-[#F59842] transition-colors duration-200">
                    {item}
                  </span>

                  <Image
                    src="/icons/chevron-right.svg"
                    alt="arrow"
                    width={8}
                    height={8}
                  />
                </div>
              )
            )}
          </div>

          {/* MIDDLE COLUMN */}
          <div className="w-72 border-r border-gray-200">
           {currentTemples.map((item) => (
              <div
                key={item}
                className="group h-12 px-6 flex items-center text-sm font-semibold cursor-pointer"
              >
                <span className="text-[#112211] group-hover:text-[#F59842] transition-colors duration-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* IMAGES */}
         <div className="flex items-center gap-4 p-4 flex-1 justify-evenly min-w-0">
            {currentImages.map((image, index) => (
  <div
    key={index}
    className="w-64 h-56 overflow-hidden rounded-custom flex-shrink-0"
  >
    <Image
      src={image}
      alt="Temple"
      width={249}
      height={230}
      className="w-full h-full object-cover"
    />
  </div>
))}
          </div>
        </div>
      )}
      {showHoliday && (
  <div
    onMouseLeave={() => setShowHoliday(false)}
    className="absolute top-24 left-1/2 -translate-x-1/2 z-50 flex bg-white rounded-lg shadow-lg overflow-hidden"
  >
    {/* LEFT */}
    <div className="w-72 border-r border-gray-200">
      {holidayCategories.map((item) => (
        <div
          key={item}
          onMouseEnter={() => setSelectedHoliday(item)}
          className="group h-12 px-6 flex items-center justify-between cursor-pointer"
        >
          <span className="text-[#112211] text-sm font-semibold group-hover:text-[#F59842]">
            {item}
          </span>
        
          <Image
            src="/icons/chevron-right.svg"
            alt="arrow"
            width={8}
            height={8}
          />
        </div>
      ))}
    </div>

    {/* MIDDLE */}
    <div className="w-72 border-r border-gray-200">
      {currentPlaces.map((item) => (
        <div
          key={item}
          className="group h-12 px-6 flex items-center cursor-pointer"
        >
          <span className="text-primary text-sm font-semibold group-hover:text-primary-orange">
            {item}
          </span>
        </div>
      ))}
    </div>

    {/* IMAGES */}
    <div className="flex items-center gap-4 p-4">
      {currentHolidayImages.map((image, index) => (
        <div
          key={index}
          className="w-[249px] h-[230px] overflow-hidden rounded-custom"
        >
          <Image
            src={image}
            alt="Holiday"
            width={249}
            height={230}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
)}
    </>
  );
}