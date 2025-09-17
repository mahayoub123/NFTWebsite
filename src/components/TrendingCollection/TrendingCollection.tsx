import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import frameImg from "../../assets/images/Frame 1.png";
import frameImg2 from "../../assets/images/Frame 2.png";
import frameImg3 from "../../assets/images/Frame 3.png";

const TrendingCollection: React.FC = () => {
  const trending = useSelector((state: RootState) => state.trending);

  return (
    <section className="bg-[#1A1A1A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 font-work">
            Trending Collection
          </h2>
          <p className="text-gray-400 font-work">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((item) => (
            <div
              key={item.id}
              className="bg-[#2A2A2A] rounded-2xl p-4 hover:scale-105 transition-transform"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <div className="flex justify-between mb-4">
                <img
                  src={frameImg}
                  alt="frame 1"
                  className="w-1/3 h-20 object-cover rounded-xl"
                />
                <img
                  src={frameImg2}
                  alt="frame 2"
                  className="w-1/3 h-20 object-cover rounded-xl"
                />
                <img
                  src={frameImg3}
                  alt="frame 3"
                  className="w-1/3 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-work">{item.title}</h3>
                  <p className=" font-work text-sm text-gray-400">
                    {item.author}
                  </p>
                </div>
                <span className=" font-work bg-purple-600 text-white text-sm px-3 py-1 rounded-xl">
                  {item.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
