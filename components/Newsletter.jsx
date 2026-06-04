export default function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto mt-20 mb-20 px-6">
      <div className="bg-orange-100 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-4xl font-bold mb-3">
            Subscribe Newsletter
          </h2>

          <p className="text-gray-600 mb-4">
            Get travel updates and offers directly in your inbox.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-3 rounded-lg w-72"
            />

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-40 h-40 bg-orange-500 rounded-t-full rounded-r-full"></div>
        </div>

      </div>
    </section>
  );
}