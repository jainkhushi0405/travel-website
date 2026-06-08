export default function Searchform() {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 w-fit mx-auto -mt-20 relative z-10">
      <h3 className="font-semibold text-2xl mb-6">✈ Flights</h3>

      <div className="flex gap-[10px] items-end">
        {/* From */}
        <div className="relative w-[206px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            From
          </label>

          <input
            type="text"
            value="Mumbai"
            readOnly
            className="border h-[56px] px-4 rounded-[4px] w-full"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[24px] text-black font-bold">
            ⇄
          </span>
        </div>

        {/* To */}
        <div className="relative w-[206px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            To
          </label>

          <input
            type="text"
            value="Delhi"
            readOnly
            className="border h-[56px] px-4 rounded-[4px] w-full"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[24px] text-black font-bold">
            ⇄
          </span>
        </div>

        {/* Trip */}
        <div className="relative w-[206px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Trip
          </label>

          <select className="border h-[56px] px-4 rounded-[4px] w-full">
            <option>Return</option>
            <option>One Way</option>
            <option>Multicity</option>
          </select>
        </div>

        {/* Depart */}
        <div className="relative w-[206px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Depart
          </label>

          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border h-[56px] px-4 rounded-[4px] w-full"
          />
        </div>

        {/* Return */}
        <div className="relative w-[206px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Return
          </label>

          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border h-[56px] px-4 rounded-[4px] w-full"
          />
        </div>

        {/* Passenger */}
        <div className="relative w-[230px]">
          <label className="text-[12px] text-gray-500 bg-white px-1 absolute -top-2 left-3">
            Passenger - Class
          </label>

          <input
            type="text"
            value="2 Passenger, Economy"
            readOnly
            className="border h-[56px] px-4 rounded-[4px] w-full"
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 mt-6">
        <p className="text-gray-700 cursor-pointer">
          + Add Promo Code
        </p>

        <button
          className="w-[144px] h-[48px] bg-[#F59842] hover:bg-[#F59842] text-black rounded-[4px] px-4 py-2 flex items-center justify-center gap-1 whitespace-nowrap"
        >
          ✈ Show Flights
        </button>
      </div>
    </div>
  );
}