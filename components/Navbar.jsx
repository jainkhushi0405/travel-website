import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6">
      <Image
  src="/logo.png"
  alt="Travel World"
  width={180}
  height={60}
/>
      
      <ul className="flex gap-8 text-white">
  <li>✈ Flight</li>
  <li>🚆 Train</li>
  <li>🏖 Holiday</li>
  <li>🛕 Holy Places ▼</li>
</ul>
      <button className="bg-white text-black px-5 py-2 rounded-lg">
       Login / Sign up
      </button>
    </nav>
  );
}