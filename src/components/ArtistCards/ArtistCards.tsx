import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const ArtistCards: React.FC = () => {
  const work = useSelector((state: RootState) => state.artist);

  return (
    <section className="bg-[#1A1A1A] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.id}
              className="bg-[#2A2A2A] rounded-2xl p-4 hover:scale-105 transition-transform"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt="img"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <h5 className=" font-work mt-3 text-lg font-semibold ">
                  {item.title}
                </h5>
                <p className=" font-work mt-1 text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistCards;
