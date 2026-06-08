export default function TripCards() {
  const trips = [
    {
      city: "Istanbul, Turkey",
      image: "/trips/istanbul.png",
    },
    {
      city: "Sydney, Australia",
      image: "/trips/sydney.png",
    },
    {
      city: "Baku, Azerbaijan",
      image: "/trips/baku.png",
    },
    {
      city: "Malé, Maldives",
      image: "/trips/male.png",
    },
    {
      city: "Paris, France",
      image: "/trips/paris.png",
    },
    {
  city: "New York, US",
  image: "/trips/new-york.png",
},
    {
      city: "London, UK",
      image: "/trips/london.png",
    },
    {
      city: "Tokyo, Japan",
      image: "/trips/tokyo.png",
    },
    {
      city: "Dubai, UAE",
      image: "/trips/dubai.png",
    },
  ];

  return (
    <section className="max-w-[1232px] mx-auto mt-[72px]">
      
      {/* Heading Row */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-[32px] font-semibold text-black leading-none">
            Plan your perfect trip
          </h2>

          <p className="text-[16px] font-normal text-[#112211]/75 mt-3">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>

        <button className="w-[149px] h-[40px] border border-[#F59842] rounded-[4px] text-[14px] font-medium text-[#112211]">
          See more places
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md h-[122px] p-4 flex items-center gap-4"
          >
            <img
              src={trip.image}
              alt={trip.city}
              className="w-[90px] h-[90px] rounded-lg object-cover"
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-semibold text-[#112211]/70">
                {trip.city}
              </h3>

              <div className="flex items-center gap-2 text-[14px] font-medium text-[#112211]">
                <span>Flights</span>
                <span>•</span>
                <span>Hotels</span>
                <span>•</span>
                <span>Resorts</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}