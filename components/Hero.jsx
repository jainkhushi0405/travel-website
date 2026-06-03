export default function Hero() {
  return (
    <section
      className="h-[600px] flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <h3 className="text-2xl mb-2">
        Adventure awaits
      </h3>

      <h1 className="text-6xl font-bold">
        TIME TO TRAVEL
      </h1>

      <p className="mt-4 text-lg">
        Discover amazing destinations
      </p>
    </section>
  );
}