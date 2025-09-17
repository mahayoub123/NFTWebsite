import React from "react";
import spaceImg from "../../assets/images/space.png";

const WeeklyDigest: React.FC = () => {
  return (
    <section className="bg-[#2A2A2A] py-8 px-4 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full max-w-[1400px] mx-auto">
        <div className="flex-1">
          <img
            src={spaceImg}
            alt="Astronaut Reading"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center text-white space-y-4">
          <h2 className="text-2xl md:text-3xl font-work">
            Join Our Weekly Digest
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-work">
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-[#1F1F1F] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
            <button className="font-work px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyDigest;
