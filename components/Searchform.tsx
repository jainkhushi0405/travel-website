"use client";

import Image from "next/image";
import { useState } from "react";

export default function Searchform() {
  const [tripType, setTripType] = useState("Return");
  const [showDropdown, setShowDropdown] = useState(false);
  return (
      <div className="bg-white shadow-lg rounded-3xl p-8 max-w-[1232px] mx-auto -mt-20 relative z-10">
      <h3 className="font-semibold text-2xl mb-6 flex items-center gap-2">
        <Image
          src="/flight-search.svg"
          alt="Flights"
          width={20}
          height={20}
        />
        Flights
      </h3>

      <div className="flex gap-2 items-end">
        {/* From */}
        <div className="relative w-[206px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            From
          </label>

          <input
            type="text"
            value="Mumbai"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
            <Image
              src="/ion_swap-horizontal.svg"
              alt="Swap"
              width={24}
              height={24}
            />
          </span>
        </div>

        {/* To */}
        <div className="relative w-[206px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            To
          </label>

          <input
            type="text"
            value="Delhi"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
            <Image
              src="/ion_swap-horizontal.svg"
              alt="Swap"
              width={24}
              height={24}
            />
          </span>
        </div>

       {/* Trip */}
<div className="relative w-[206px]">
  <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
    Trip
  </label>

  <button
    type="button"
    onClick={() => setShowDropdown(!showDropdown)}
    className="border h-14 px-4 rounded-md w-full bg-white flex items-center justify-between"
  >
    <span>{tripType}</span>
    <Image
  src="/chevron-down.svg"
  alt="Dropdown"
  width={14}
  height={7}
/>
  </button>

  {showDropdown && (
    <div className="absolute top-[62px] left-1/2 -translate-x-1/2 z-50 w-[140px] h-[150px] bg-white rounded-[15px] border border-black/15 shadow-[0px_4px_10px_rgba(0,0,0,0.15)] overflow-hidden">
      
      <button
        onClick={() => {
          setTripType("One Way");
          setShowDropdown(false);
        }}
        className="w-full h-[49px] flex items-center justify-center text-[14px] font-semibold text-black"
      >
        One Way
      </button>

      <div className="mx-4 border-b border-black/15"></div>

      <button
        onClick={() => {
          setTripType("Round Trip");
          setShowDropdown(false);
        }}
        className="w-full h-[49px] flex items-center justify-center text-[14px] font-semibold text-black"
      >
        Round Trip
      </button>

      <div className="mx-4 border-b border-black/15"></div>

      <button
        onClick={() => {
          setTripType("Multicity");
          setShowDropdown(false);
        }}
        className="w-full h-[48px] flex items-center justify-center text-[14px] font-semibold text-black"
      >
        Multicity
      </button>

    </div>
  )}
</div>

        {/* Depart */}
        <div className="relative w-[206px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Depart
          </label>

          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />
        </div>

        {/* Return */}
        <div className="relative w-[206px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Return
          </label>

          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />
        </div>

        {/* Passenger */}
        <div className="relative w-[230px]">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Passenger - Class
          </label>

          <input
            type="text"
            value="2 Passenger, Economy"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 mt-6">
        <p className="text-gray-700 cursor-pointer">
          + Add Promo Code
        </p>

        <button className="w-36 h-12 bg-[#F59842] hover:bg-[#F59842] text-black rounded-md px-4 py-2 flex items-center justify-center gap-1 whitespace-nowrap">
        <Image
  src="/Paper Plane.svg"
  alt="Flight"
  width={16}
  height={16}
  className="w-4 h-4"
/>
          <span>Show Flights</span>
        </button>
      </div>
    </div>
  );
}