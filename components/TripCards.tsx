import Image from "next/image";
import { trips } from "./Data/trips";

export default function TripCards() {
  return (
    <section className="max-w-[1232px] mx-auto mt-16">
      
      {/* Heading Row */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-black leading-none">
            Plan your perfect trip
          </h2>

          <p className="text-base font-normal text-primary-light mt-3">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>

        <button className="w-[149px] h-10 border border-primary-orange rounded-md text-sm font-medium text-primary">
          See more places
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(17,34,17,0.08)] h-32 p-4 flex items-center gap-4"
          >
            <Image
              src={trip.image}
              alt={trip.city}
              width={96}
              height={96}
              className="w-24 h-24 rounded-lg object-cover"
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-primary-light">
                {trip.city}
              </h3>

              <div className="flex items-center gap-2 text-sm font-medium text-primary">
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