export default function TravelOptions() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-6">

        <div
          className="h-80 rounded-2xl bg-cover bg-center flex items-end p-6 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
          }}
        >
          <div>
            <h2 className="text-3xl font-bold">Flights</h2>
            <p>Search flights around the world</p>
          </div>
        </div>

        <div
          className="h-80 rounded-2xl bg-cover bg-center flex items-end p-6 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          }}
        >
          <div>
            <h2 className="text-3xl font-bold">Holiday</h2>
            <p>Discover amazing destinations</p>
          </div>
        </div>

      </div>
    </section>
  );
}