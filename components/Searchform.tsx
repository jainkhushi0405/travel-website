
"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import CommonInput from "./CommonInput";
function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day} ${month} ${year}`; // DD MM YYYY
}

export default function Searchform() {
 const [tripType, setTripType] = useState("Return");
 const [showDropdown, setShowDropdown] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null);
const [departDate, setDepartDate] = useState("");
const [returnDate, setReturnDate] = useState("");
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const departRef = useRef<HTMLInputElement>(null);
const returnRef = useRef<HTMLInputElement>(null);
const [passenger, setPassenger] = useState("2 Passenger, Economy");
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
<div className="bg-white shadow-lg rounded-3xl px-6 py-6 max-w-7xl mx-auto -mt-20 relative z-10">

      {/* TITLE */}
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
        <Image src="/flight-search.svg" width={20} height={20} alt="" />
        Flights
      </h3>

      {/* INPUT ROW */}
      <div className="flex gap-3 items-end w-full">

       <CommonInput
  label="From"
  value={from}
  placeholder="Mumbai"
  editable={true}
  onChange={(e) => setFrom(e.target.value)}
  className="min-w-[180px]"
  rightIcon={<img src="/ion_swap-horizontal.svg" className="w-4 h-4" />}
/>

       <CommonInput
  label="To"
  value={to}
  placeholder="Delhi"
  editable={true}
  onChange={(e) => setTo(e.target.value)}
  className="min-w-[180px]"
  rightIcon={<img src="/ion_swap-horizontal.svg" className="w-4 h-4" />}
/>
        {/* TRIP */}
        <div ref={dropdownRef} className="relative min-w-[140px] max-w-[140px]">
          <CommonInput
            label="Trip"
            value={tripType}
            onClick={() => setShowDropdown(!showDropdown)}
            rightIcon={
              <Image src="/chevron-down.svg" width={16} height={16} alt="" />
            }
          />

          {showDropdown && (
          <div className="absolute top-[70px] left-0 w-full bg-white rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] overflow-hidden z-50">
              {["One Way", "Round Trip", "Multicity"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setTripType(item);
                    setShowDropdown(false);
                  }}
                className="px-4 py-3 text-sm font-semibold border-b border-gray-100 last:border-b-0 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

<div className="relative min-w-[180px]">

  <CommonInput
    label="Depart"
    value={departDate ? formatDate(departDate) : ""}
    placeholder="dd mm yyyy"
    editable={false}
  />

  <input
    ref={departRef}
    type="date"
    className="absolute opacity-0 w-full h-full"
    onChange={(e) => setDepartDate(e.target.value)}
  />

  <Image
    src="/calendar.jpg"
    width={16}
    height={16}
    alt=""
    className="absolute right-3 top-4 cursor-pointer"
    onClick={() => departRef.current?.showPicker()}
  />
</div>
<div className="relative min-w-[180px]">

  <CommonInput
    label="Return"
    value={returnDate ? formatDate(returnDate) : ""}
    placeholder="dd mm yyyy"
    editable={false}
  />

  <input
    ref={returnRef}
    type="date"
    className="absolute opacity-0 w-full h-full"
    onChange={(e) => setReturnDate(e.target.value)}
  />

  <Image
    src="/calendar.jpg"
    width={16}
    height={16}
    alt=""
    className="absolute right-3 top-4 cursor-pointer"
    onClick={() => returnRef.current?.showPicker()}
  />
</div>
       <CommonInput
  label="Passenger - Class"
  value={passenger}
  placeholder="2 Passenger, Economy"
  editable={true}
  onChange={(e) => setPassenger(e.target.value)}
  className="min-w-[250px]"
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