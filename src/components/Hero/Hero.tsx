import React from "react";
import HeroImg from "../../assets/images/heroImg.png";
import avatarImg from "../../assets/images/avatar.png";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "240k+", label: "Total Sale" },
  { value: "100k+", label: "Auctions" },
  { value: "240k+", label: "Artists" },
];

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#1a1a1a] text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl  leading-snug lg:leading-tight font-work">
              Discover
              <br />
              Digital Art &amp;
              <br />
              Collect NFTs
            </h1>

            <p className="mt-4 text-gray-300 max-w-xl text-sm sm:text-base lg:text-lg font-work">
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k NFT Artists.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6f28d9] transition px-5 py-2.5 rounded-full text-white text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6f28d9]"
                aria-label="Get started"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                Get Started
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 sm:gap-10 items-end">
              {stats.map((s) => (
                <div key={s.label} className="min-w-[100px]">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-[400px]">
            <div className="rounded-xl overflow-hidden ring-1 ring-black/30 bg-gradient-to-b from-[#0f1724] to-[#111827]">
              <div className="w-full h-56 sm:h-64 bg-gray-800">
                <img
                  src={HeroImg}
                  alt="Space walking"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#111827]">
                <div className="text-base sm:text-lg font-semibold">
                  Space Walking
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={avatarImg}
                    alt="Artist"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-sm text-gray-300">Animakid</div>
                </div>
              </div>
            </div>

            <div className="mt-3 border-dashed border-2 border-[#7C3AED] rounded-md opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
