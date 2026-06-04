export default function Searchform() {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 w-[92%] mx-auto -mt-20 relative z-10">
      <h3 className="font-semibold text-2xl mb-6">✈ Flights</h3>

      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.5fr] gap-4 items-end">
        <div className="relative">
  <label className="text-sm text-gray-500">From</label>

  <input
    type="text"
    value="Mumbai"
    readOnly
    className="border p-3 rounded w-full"
  />

  <span className="absolute right-3 top-11 text-xl">
    ⇄
  </span>
</div>

        <div className="relative">
  <label className="text-sm text-gray-500">To</label>

  <input
    type="text"
    value="Delhi"
    readOnly
    className="border p-3 rounded w-full"
  />

  <span className="absolute right-3 top-11 text-xl">
    ⇄
  </span>
</div>
        <div>
          <label className="text-sm text-gray-500">Trip</label>
          <select className="border p-3 rounded w-full">
            <option>Return</option>
            <option>One Way</option>
            <option>Multicity</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">Depart</label>
          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Return</label>
          <input
            type="text"
            value="25 May 24"
            readOnly
            className="border p-3 rounded w-full"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Passenger - Class
          </label>
          <input
            type="text"
            value="2 Passenger, Economy"
            readOnly
            className="border p-3 rounded w-full"
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-8 mt-6">
        <p className="text-gray-700 cursor-pointer">
          + Add Promo Code
        </p>

        <button className="bg-orange-400 hover:bg-orange-500 text-black px-6 py-3 rounded">
          ✈ Show Flights
        </button>
      </div>
    </div>
  );
}