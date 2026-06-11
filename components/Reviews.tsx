import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      title: "A real sense of community, nurtured",
      description:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always.",
      name: "Olga",
      location: "Weave Studios – Kai Tak",
      image: "/Review/review-1.png",
    },
    {
      title: "The facilities are superb. Clean, slick, bright.",
      description:
        "A real sense of community, nurtured. Really appreciate the help and support from the staff.",
      name: "Thomas",
      location: "Weave Studios – Olympic",
      image: "/Review/review-2.png",
    },
    {
      title: "A real sense of community, nurtured",
      description:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always.",
      name: "Eliot",
      location: "Weave Studios – Kai Tak",
      image: "/Review/review-3.png",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] pt-20 pb-8">
      <div className="max-w-[1232px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-[40px] font-bold text-[#112211]">
              Reviews
            </h2>

            <p className="mt-2 text-[14px] text-[#112211]/75">
              What people says about Golobe facilities
            </p>
          </div>

          <button className="border border-[#FFB84D] rounded px-4 py-2 text-[14px] text-[#112211]">
            See All
          </button>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative w-[425px] h-[586px]"
            >
              {/* Orange Back Layer */}
              <div className="absolute top-[22px] left-[25px] w-[425px] h-[586px] rounded-[20px] bg-[#F59842]/40" />

              {/* Main Card */}
              <div className="relative z-10 w-[425px] h-[586px] bg-white rounded-[20px] p-6 shadow-[0_4px_16px_rgba(17,34,17,0.10)]">
                <div className="h-full flex flex-col">

                  {/* Title */}
                  <h3 className="text-[24px] font-bold leading-[100%] text-[#112211]">
                    “{review.title}”
                  </h3>

                  {/* Gap */}
                  <div className="h-10" />

                  {/* Description */}
                  <p className="h-[72px] text-[14px] font-medium leading-[100%] text-[#112211]/50">
  {review.description}
</p>

                  {/* View More */}
                  <div className="flex justify-end mt-8">
                    <button className="text-[16px] font-bold text-[#112211]">
                      View more
                    </button>
                  </div>

                  {/* Gap */}
                  <div className="h-5" />

                  {/* Stars */}
                  <div className="flex gap-1">
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

                  {/* Gap */}
                  <div className="h-3" />

                  {/* Name */}
                  <div>
                    <h4 className="text-[14px] font-bold text-[#112211]">
                      {review.name}
                    </h4>

                    <p className="mt-1 text-[12px] font-medium text-[#112211]/50">
                      {review.location}
                    </p>
                  </div>

                  {/* Gap */}
                  <div className="h-3" />

                  {/* Google */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Review/google.png"
                      alt="google"
                      width={24}
                      height={24}
                    />

                    <span className="text-[12px] font-bold text-[#112211]/40">
                      Google
                    </span>
                  </div>

                  {/* Push Image Bottom */}
                 <div className="h-8" />

                  {/* Review Image */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={377}
                    height={200}
                    className="rounded-[8px] object-cover"
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