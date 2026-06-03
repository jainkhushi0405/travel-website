export default function TripCards() {
  const trips = [
    {
      city: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    },
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      city: "Maldives",
      country: "Maldives",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    },
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      city: "London",
      country: "UK",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    },
    {
      city: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">
        Plan your perfect trip
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={trip.image}
              alt={trip.city}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-xl">
                {trip.city}
              </h3>
              <p className="text-gray-500">
                {trip.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}