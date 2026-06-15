"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Searchform() {
  const [tripType, setTripType] = useState("Return");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 max-w-7xl mx-auto -mt-20 relative z-10">
      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-gray-900">
        <Image src="/flight-search.svg" alt="Flights" width={20} height={20} />
        Flights
      </h3>

      {/* INPUT ROW */}
      <div className="flex gap-2 items-end">
        {/* FROM */}
        <div className="relative w-50">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            From
          </label>
          <input
            type="text"
            value="Mumbai"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />
        </div>

        {/* TO */}
        <div className="relative w-50">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            To
          </label>
          <input
            type="text"
            value="Delhi"
            readOnly
            className="border h-14 px-4 rounded-md w-full"
          />
        </div>

        {/* TRIP */}
        <div ref={dropdownRef} className="relative w-50">
          <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Trip
          </label>

          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="border h-14 px-4 rounded-md w-full bg-white flex items-center justify-between"
          >
            <span className="text-gray-900">{tripType}</span>
            <Image
              src="/chevron-down.svg"
              alt="Dropdown"
              width={14}
              height={7}
            />
          </button>

          {showDropdown && (
            <div className="absolute top-12 right-0  z-50 w-40 h-30 bg-white rounded-xl border border-black/10 shadow-md overflow-hidden">
              <button
                onClick={() => {
                  setTripType("One Way");
                  setShowDropdown(false);
                }}
                className="w-full h-10 flex items-center justify-center text-sm font-semibold text-gray-900"
              >
                One Way
              </button>

              <div className="mx-4 border-b border-black/10"></div>

              <button
                onClick={() => {
                  setTripType("Round Trip");
                  setShowDropdown(false);
                }}
                className="w-full h-10 flex items-center justify-center text-sm font-semibold text-gray-900"
              >
                Round Trip
              </button>

              <div className="mx-4 border-b border-black/10"></div>

              <button
                onClick={() => {
                  setTripType("Multicity");
                  setShowDropdown(false);
                }}
                className="w-full h-10 flex items-center justify-center text-sm font-semibold text-gray-900"
              >
                Multicity
              </button>
            </div>
          )}
        </div>

        {/* DEPART */}
        <div className="relative w-50">
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

        {/* RETURN */}
        <div className="relative w-50">
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

        {/* PASSENGER */}
        <div className="relative w-60">
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

      {/* ACTIONS */}
      <div className="flex justify-end items-center gap-8 mt-6">
        <p className="text-gray-600 cursor-pointer">
          <Plus className="inline-block mr-1 " /> Add Promo Code
        </p>

        <button className="w-36 h-12 bg-[#F59842] text-black rounded-md flex items-center justify-center gap-1">
          <Image src="/Paper Plane.svg" alt="Flight" width={16} height={16} />
          <span>Show Flights</span>
        </button>
      </div>
    </div>
  );
}
