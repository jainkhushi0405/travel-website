"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [showHolyPlaces, setShowHolyPlaces] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowHolyPlaces(false);
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

          <li className="flex items-center gap-2 cursor-pointer">
            <Image src="/holiday.svg" alt="Holiday" width={20} height={20} />
            Holiday
          </li>

          <li
            onClick={() => setShowHolyPlaces(!showHolyPlaces)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Image
              src="/holy-places.svg"
              alt="Holy Places"
              width={20}
              height={20}
            />
            <span>Holy Places</span>
            <span className="text-2xl">▾</span>
          </li>
        </ul>

        <button className="w-40 h-12 bg-white text-black text-sm font-medium rounded-lg flex items-center justify-center">
          Login / Sign up
        </button>
      </nav>

      {showHolyPlaces && (
        <div
          ref={dropdownRef}
          className="absolute top-24 left-1/2 -translate-x-1/2 z-50 flex bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* LEFT COLUMN */}
          <div className="w-72 border-r border-gray-200">
            {["Hindu", "Muslim", "Christian", "Jain", "Brahman"].map(
              (item) => (
                <div
                  key={item}
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
            {[
              "Ram Mandir",
              "Hanuman Setu Mandir",
              "Sri Venkateshwar Temple",
              "Sheetala Devi Mandir",
            ].map((item) => (
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
            <Image
              src="/holyplace1.png"
              alt="Temple"
              width={249}
              height={230}
              className="rounded-[20px] object-cover flex-shrink-0"
            />

            <Image
              src="/holyplace2.png"
              alt="Temple"
              width={249}
              height={230}
              className="rounded-[20px] object-cover flex-shrink-0"
            />
          </div>
        </div>
      )}
    </>
  );
}