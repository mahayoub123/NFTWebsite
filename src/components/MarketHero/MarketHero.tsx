import React from "react";
import searchIcon from "../../assets/images/search.svg";
const MarketHero: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className=" font-work text-2xl md:text-3xl font-bold mb-2">
          Browse Marketplace
        </h1>
        <p className="font-work text-gray-400 mb-6 text-sm md:text-base">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="w-full py-3 pl-4 pr-10 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-purple-500 transition"
          />

          <img
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
            src={searchIcon}
            alt="icon"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketHero;
