import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const TopCreators: React.FC = () => {
  const creators = useSelector((state: RootState) => state.creators);

  return (
    <section className="w-full bg-[#1A1A1A] text-white py-10 px-5 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-work">
            Top Creators
          </h2>
          <p className="text-gray-400 font-work">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <button className=" font-work mt-4 md:mt-0 border border-gray-500 rounded-lg px-5 py-2 hover:bg-gray-700 transition">
          View Rankings
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creators.map((creator, index) => (
          <div
            key={creator.id}
            className="bg-[#2A2A2A] p-5 rounded-xl flex items-center space-x-4 hover:scale-105 transition"
          >
            <div className="relative">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="absolute -top-2 -left-2 bg-[#3B3B3B] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="font-work">{creator.name}</h3>
              <p className=" font-work text-gray-400 text-sm">
                Total Sales: {creator.totalSales}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
