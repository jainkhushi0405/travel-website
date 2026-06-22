import Image from "next/image";
import { reviews } from "./Data/reviews";

export default function Reviews() {
  return (
    <section className="bg-white pt-2 pb-40">
      <div className="max-w-[1232px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Reviews
            </h2>

            <p className="mt-2 text-sm text-gray-700">
              What people says about Golobe facilities
            </p>
          </div>

          <button className="border border-orange-300 rounded px-4 py-2 text-sm text-gray-900">
            See All
          </button>
        </div>

        {/* Cards */}
  <div className="flex gap-12 overflow-x-auto scrollbar-hide pb-4">
          {reviews.map((review, index) => (
            <div
              key={index}
             className="relative w-[425px] h-[586px] flex-shrink-0"
            >
              {/* Orange Back Layer */}
              <div className="absolute top-[22px] left-[25px] w-[425px] h-[586px] rounded-[20px] bg-orange-400/40" />

              {/* Main Card */}
              <div className="relative z-10 w-[425px] h-[586px] bg-white rounded-[20px] p-6 shadow-[0_4px_16px_rgba(17,34,17,0.10)]">
                <div className="h-full flex flex-col">

                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-none text-gray-900">
                    “{review.title}”
                  </h3>

                  <div className="h-10" />

                  {/* Description */}
                  <p className="h-[72px] text-sm font-medium leading-none text-gray-500">
                    {review.description}
                  </p>

                  {/* View More */}
                  <div className="flex justify-end mt-0">
                    <button className="text-base font-bold text-gray-900">
                      View more
                    </button>
                  </div>

                  <div className="h-5" />

                  {/* Stars */}
                  <div className="flex gap-3">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        src="/Review/Star.png"
                        alt="Star"
                        width={23}
                        height={21}
                      />
                    ))}
                  </div>

                  <div className="h-7" />

                  {/* Name */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {review.name}
                    </h4>

                    <p className="mt-1 text-xs font-medium text-gray-500">
                      {review.location}
                    </p>
                  </div>

                  <div className="h-3" />

                  {/* Google */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Review/google.png"
                      alt="google"
                      width={24}
                      height={24}
                    />

                    <span className="text-xs font-bold text-gray-400">
                      Google
                    </span>
                  </div>

                  <div className="h-8" />

                  {/* Review Image */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={377}
                    height={200}
                    className="rounded-lg object-cover"
                  />

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}