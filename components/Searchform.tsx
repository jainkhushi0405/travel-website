"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Searchform() {
  const [tripType, setTripType] = useState("Return");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [departDate, setDepartDate] = useState("25 May 24");
  const [returnDate, setReturnDate] = useState("25 May 24");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 max-w-7xl mx-auto -mt-20 relative z-10">

      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
        <Image src="/flight-search.svg" width={20} height={20} alt="" />
        Flights
      </h3>

      {/* INPUT ROW */}
      <div className="flex gap-3 items-end flex-nowrap">

        {/* FROM */}
        <div className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            From
          </label>

          <div className="border h-14 px-3 rounded-md flex items-center bg-white">
            <input
              type="text"
              value="Mumbai"
              readOnly
              className="w-full outline-none text-sm"
            />
            <img src="/ion_swap-horizontal.svg" className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* TO */}
        <div className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            To
          </label>

          <div className="border h-14 px-3 rounded-md flex items-center bg-white">
            <input
              type="text"
              value="Delhi"
              readOnly
              className="w-full outline-none text-sm"
            />
            <img src="/ion_swap-horizontal.svg" className="w-4 h-4 ml-2" />
          </div>
        </div>

        {/* TRIP */}
        <div ref={dropdownRef} className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Trip
          </label>

          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-between border h-14 px-3 rounded-md w-full bg-white"
          >
            <span className="text-sm">{tripType}</span>
            <Image src="/chevron-down.svg" width={16} height={16} alt="" />
          </button>

          {showDropdown && (
            <div className="absolute top-16 left-0 w-[180px] bg-white border rounded-xl shadow-lg z-50">
              {["One Way", "Round Trip", "Multicity"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setTripType(item);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-orange-50 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DEPART */}
        <div className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Depart
          </label>

          <input
            type="text"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="border h-14 px-3 rounded-md w-full text-sm"
          />
        </div>

        {/* RETURN */}
        <div className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Return
          </label>

          <input
            type="text"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border h-14 px-3 rounded-md w-full text-sm"
          />
        </div>

        {/* PASSENGER - FIXED */}
        <div className="relative w-[190px] min-w-[190px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3 z-10">
            Passenger - Class
          </label>

          <div className="border h-14 px-3 rounded-md w-full bg-white flex items-center">
            <span className="text-sm text-gray-900 whitespace-nowrap">
              2 Passenger, Economy
            </span>
          </div>
        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex justify-end items-center gap-6 mt-6">

        <p className="flex items-center gap-1">
          <Plus size={16} /> Add Promo Code
        </p>

        <button className="bg-[#F59842] px-5 py-3 rounded-md flex items-center gap-2">
          <Image src="/Paper Plane.svg" width={16} height={16} alt="" />
          Show Flights
        </button>

      </div>
    </div>
  );
}