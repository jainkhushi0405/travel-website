import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-8 left-12 right-12 z-50 flex items-center justify-between">
                                  
      <Image
        src="/logo-white.png"
        alt="Travel World"
        width={123}
        height={36}
      />

   <ul className="flex gap-10 text-white/90 text-sm font-semibold">
        <li className="flex items-center gap-2">
          <Image
            src="/airplane.svg"
            alt="Flight"
            width={20}
            height={20}
          />
          Flight
        </li>

        <li className="flex items-center gap-2">
          <Image
            src="/train.svg"
            alt="Train"
            width={20}
            height={20}
          />
          Train
        </li>

        <li className="flex items-center gap-2">
          <Image
            src="/holiday.svg"
            alt="Holiday"
            width={20}
            height={20}
          />
          Holiday
        </li>

        <li className="flex items-center gap-1">
          <Image
            src="/holy-places.svg"
            alt="Holy Places"
            width={20}
            height={20}
          />

          <span>Holy Places</span>

          <span className="text-2xl">▾</span>
        </li>
      </ul>

      <button
        className="
          w-40
          h-12
          bg-white
          text-black
          text-sm
          font-medium
          rounded-lg
          flex
          items-center
          justify-center
        "
      >
        Login / Sign up
      </button>
    </nav>
  );
}