"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import CommonInput from "./CommonInput";

export default function Searchform() {
  const [tripType, setTripType] = useState("Return");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

const [departDate, setDepartDate] = useState("");
const [returnDate, setReturnDate] = useState("");

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
   <div className="bg-white shadow-lg rounded-3xl px-6 py-6 max-w-6xl mx-auto -mt-20 relative z-10">

      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
        <Image src="/flight-search.svg" width={20} height={20} alt="" />
        Flights
      </h3>

      {/* INPUT ROW */}
      <div className="flex gap-3 items-end w-full">

        <CommonInput
          label="From"
          value="Mumbai"
          className="min-w-[150px]"
          rightIcon={<img src="/ion_swap-horizontal.svg" className="w-4 h-4" />}
        />

        <CommonInput
          label="To"
          value="Delhi"
          className="min-w-[150px]"
          rightIcon={<img src="/ion_swap-horizontal.svg" className="w-4 h-4" />}
        />

        {/* TRIP */}
        <div ref={dropdownRef} className="relative min-w-[150px] max-w-[160px]">
          <CommonInput
            label="Trip"
            value={tripType}
            onClick={() => setShowDropdown(!showDropdown)}
            rightIcon={
              <Image src="/chevron-down.svg" width={16} height={16} alt="" />
            }
          />

          {showDropdown && (
            <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg rounded-md z-50">
              {["One Way", "Round Trip", "Multicity"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setTripType(item);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

 <CommonInput
  label="Depart"
  value={departDate}
  editable={true}
  onChange={(e) => setDepartDate(e.target.value)}
/>

<CommonInput
  label="Return"
  value={returnDate}
  editable={true}
  onChange={(e) => setReturnDate(e.target.value)}
/>
        <CommonInput
          label="Passenger - Class"
          value="2 Passenger, Economy"
          className="min-w-[200px]"
        />

      </div>

      {/* ACTIONS */}
      <div className="flex justify-end items-center gap-6 mt-6">

        <p className="flex items-center gap-1">
          <Plus size={16} /> Add Promo Code
        </p>

        {/* ONLY TEXT BLACK CHANGE */}
        <button className="bg-[#F59842] px-5 py-3 rounded-md flex items-center gap-2 text-black">
          <Image src="/Paper Plane.svg" width={16} height={16} alt="" />
          Show Flights
        </button>

      </div>
    </div>
  );
}