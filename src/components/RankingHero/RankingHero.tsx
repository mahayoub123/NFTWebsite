import React from "react";

const RankingHero: React.FC = () => {
  return (
    <div className="w-full bg-[#2B2B2B] px-4 py-10 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white font-work text-3xl sm:text-4xl md:text-5xl lg:text-[51px] font-bold leading-tight">
          Top Creators
        </h2>
        <p className="text-gray-400 font-work text-base sm:text-lg md:text-xl lg:text-[22px] mt-3 max-w-2xl mx-auto">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
    </div>
  );
};

export default RankingHero;
