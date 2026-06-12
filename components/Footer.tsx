import Image from "next/image";
import { footerLinks } from "./constants/footer";

export default function Footer() {
  return (
   <footer className="bg-[#F59842] pt-[80px] pb-[32px] relative">

      <div className="max-w-[1440px] mx-auto px-[104px]">

        {/* Newsletter Card */}
       <div className="relative z-10 w-full max-w-[1440px] h-[305px] mx-auto bg-[#FFD6B0] rounded-[20px] px-[24px] flex items-center justify-between -mt-[145px]">
          {/* Left Side */}
          <div className="max-w-[520px]">

            <h2 className="text-[56px] font-bold leading-[1.05] text-[#112211]">
              Subscribe
              <br />
              Newsletter
            </h2>

            <h3 className="mt-2 text-[20px] font-semibold text-[#112211]">
              The Travel
            </h3>

            <p className="mt-2 text-[14px] text-[#112211]/70 max-w-[500px]">
              Get inspired! Receive travel discounts, tips and behind the scenes stories.
            </p>

            <div className="flex gap-4 mt-5">

              <input
                type="email"
                placeholder="Your email address"
                className="w-[320px] h-[48px] px-4 rounded-[6px] bg-white outline-none"
              />

              <button className="px-6 h-[48px] bg-[#112211] text-white rounded-[6px]">
                Subscribe
              </button>

            </div>

          </div>

          {/* Right Side Image */}
          <Image
            src="/footer/travel.png"
            alt="Travel"
            width={400}
            height={305}
            priority
          />

        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-6 gap-8 mt-2">

          {/* Logo + Social */}
          <div>

            <Image
              src="/footer/logo-black.png"
              alt="Travel World"
              width={110}
              height={36}
            />

            <div className="flex gap-3 mt-4">

              <Image
                src="/footer/facebook.png"
                alt="facebook"
                width={18}
                height={18}
              />

              <Image
                src="/footer/twitter.png"
                alt="twitter"
                width={18}
                height={18}
              />

              <Image
                src="/footer/youtube.png"
                alt="youtube"
                width={18}
                height={18}
              />

              <Image
                src="/footer/instagram.png"
                alt="instagram"
                width={18}
                height={18}
              />

            </div>

          </div>

          <div>
            <h4 className="font-bold text-[16px] mb-3">
              Our Destinations
            </h4>

            {footerLinks.destinations.map((item) => (
              <p key={item} className="mb-2 text-[14px]">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-[16px] mb-3">
              Our Activities
            </h4>

            {footerLinks.activities.map((item) => (
              <p key={item} className="mb-2 text-[14px]">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-[16px] mb-3">
              Travel Blogs
            </h4>

            {footerLinks.blogs.map((item, index) => (
              <p key={`${item}-${index}`} className="mb-2 text-[14px]">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-[16px] mb-3">
              About Us
            </h4>

            {footerLinks.about.map((item) => (
              <p key={item} className="mb-2 text-[14px]">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-[16px] mb-3">
              Contact Us
            </h4>

            {footerLinks.contact.map((item) => (
              <p key={item} className="mb-2 text-[14px]">
                {item}
              </p>
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
}