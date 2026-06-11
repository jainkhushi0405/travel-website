import Image from "next/image";

export default function Searchform() {
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

          <select className="border h-14 px-4 rounded-md w-full">
            <option>Return</option>
            <option>One Way</option>
            <option>Multicity</option>
          </select>
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