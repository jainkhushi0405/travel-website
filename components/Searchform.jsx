export default function Searchform() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl mx-auto -mt-16 relative z-10">
      <h3 className="font-semibold mb-4">✈ Flights</h3>

      <div className="grid grid-cols-6 gap-3">
        <input
          type="text"
          placeholder="Mumbai"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Delhi"
          className="border p-2 rounded"
        />

        <select className="border p-2 rounded">
          <option>Round Trip</option>
          <option>One Way</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="2 Guests"
          className="border p-2 rounded"
        />

        <button className="bg-orange-500 text-white rounded px-4">
          Search
        </button>
      </div>
    </div>
  );
}