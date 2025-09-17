import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const WorkCards: React.FC = () => {
  const work = useSelector((state: RootState) => state.work);

  return (
    <section className="bg-[#1A1A1A] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-work mb-2">How it works</h2>
          <p className="text-gray-400 font-work">
            Find out how to get started.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.id}
              className="bg-[#2A2A2A] rounded-2xl p-4 hover:scale-105 transition-transform"
            >
              <div className=" w-full h-[439px]">
                <div>
                  <img src={item.image} alt="img" />
                  <p className="text-sm text-white text-[22px] font-work">
                    {item.title}
                  </p>
                </div>
                <span className=" font-work text-gray-600 text-sm px-3 py-1 rounded-xl text-[20px] ">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCards;
