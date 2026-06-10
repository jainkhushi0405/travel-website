export default function Hero() {
  return (
    <section
      className="h-[600px] flex flex-col justify-center items-center text-white bg-cover bg-center overflow-hidden -mt-8"
      style={{ backgroundImage: "url('/hero-figma.png')" }}
    >
    <h3 className="text-5xl font-semibold mb-2">
        Adventure awaits
      </h3>

    <h1 className="text-[80px] font-bold leading-none">
  TIME TO TRAVEL
</h1>

      <p className="mt-6 text-2xl">
        Special offers to suit your plan
      </p>
    </section>
  );
}