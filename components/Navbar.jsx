import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-[32px] left-[48px] right-[48px] z-50 flex items-center justify-between">
     <Image
  src="/logo-white.png"
  alt="Travel World"
  width={123}
  height={36}
/>


      <ul className="flex gap-5 text-[#F5F5F5] text-[14px] font-medium">

        <li className="flex items-center gap-1">
          <Image
            src="/airplane.svg"
            alt="Flight"
            width={20}
            height={20}
          />
          Flight
        </li>

        <li className="flex items-center gap-1">
          <Image
            src="/train.svg"
            alt="Train"
            width={20}
            height={20}
          />
          Train
        </li>

        <li className="flex items-center gap-1">
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
          Holy Places ▼
        </li>

      </ul>

     <button
  className="
    w-[163px]
    h-[48px]
    bg-white
    text-black
    text-[14px]
    font-medium
    rounded-[8px]
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