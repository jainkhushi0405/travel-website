import Image from "next/image";

export default function TravelOptions() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-center gap-6 flex-wrap">

        {/* Flights Card */}
        <div
          className="w-card h-card rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: "url('/flight-card.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <h2 className="text-xl-custom font-bold text-white leading-none">
              Flights
            </h2>

            <p className="text-medium text-white text-center w-content">
              Search Flights & Places Hire to our most popular destinations
            </p>

            <button className="h-button px-4 rounded bg-primary-orange hover:bg-primary-orange flex items-center gap-1 text-small font-medium text-primary">
              <Image
                src="/Paper Plane.svg"
                alt="Flight"
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              Show Flights
            </button>
          </div>
        </div>

        {/* Holiday Card */}
        <div
          className="w-card h-card rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: "url('/holiday-card.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <h2 className="text-xl-custom font-bold text-white leading-none">
              Holiday
            </h2>

            <p className="text-medium text-white text-center w-content">
              Search hotels & Places Hire to our most popular destinations
            </p>

            <button className="h-button px-4 rounded bg-primary-orange hover:bg-primary-orange flex items-center gap-1 text-small font-medium text-primary">
              <Image
                src="/Paper Plane.svg"
                alt="Holiday"
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              Show Package
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}