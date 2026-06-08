export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <button className="border px-4 py-2 rounded">
          See All
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600">
            "A real sense of community, nurtured."
          </p>

          <div className="mt-4 text-yellow-500">
            ★★★★★
          </div>

          <h4 className="mt-4 font-bold">
            Mike Harris
          </h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600">
            "The facilities are superb. Clean and bright."
          </p>

          <div className="mt-4 text-yellow-500">
            ★★★★★
          </div>

          <h4 className="mt-4 font-bold">
            Sarah Wilson
          </h4>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600">
            "Amazing travel experience and support."
          </p>

          <div className="mt-4 text-yellow-500">
            ★★★★★
          </div>

          <h4 className="mt-4 font-bold">
            John Smith
          </h4>
        </div>
      </div>
    </section>
  );
}