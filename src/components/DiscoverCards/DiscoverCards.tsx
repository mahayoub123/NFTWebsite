import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import photo from "../../assets/images/mashroom.png";

const DiscoverCards: React.FC = () => {
  const creators = useSelector((state: RootState) => state.discover);

  return (
    <section className="w-full bg-[#1A1A1A] text-white py-10 px-5 md:px-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-work">
            Discover More NFTs
          </h2>
          <p className="text-gray-400 font-work">Explore new trending NFTs</p>
        </div>
        <button className=" font-work mt-4 md:mt-0 border border-gray-500 rounded-lg px-5 py-2 hover:bg-gray-700 transition">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creators.map((discover, index) => (
          <div
            key={discover.id}
            className="bg-[#2A2A2A] p-5 rounded-xl flex items-center space-x-4 hover:scale-105 transition"
          >
            <div className="relative">
              <img
                src={discover.image}
                alt={discover.name}
                className="w-[330px] h-[396px]  object-cover"
              />
              <span className="absolute -top-2 -left-2 bg-[#3B3B3B] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="font-work">{discover.name}</h3>
              <p className="text-gray-400 text-sm font-work">
                Total Sales: {discover.totalSales}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img src={photo} alt="img" />
      </div>
    </section>
  );
};

export default DiscoverCards;
