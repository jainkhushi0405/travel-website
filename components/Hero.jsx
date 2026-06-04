export default function Hero() {
  return (
    <section
      className="h-[700px] flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <h3 className="text-5xl font-semibold mb-4">
        Adventure awaits
      </h3>

      <h1 className="text-8xl font-bold tracking-wide">
        TIME TO TRAVEL
      </h1>

      <p className="mt-6 text-2xl">
        Special offers to suit your plan
      </p>
    </section>
  );
}