import React from "react";
import nftHeroImg from "../../assets/images/nftHero.png";

const NFTHero: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] text-white px-6 py-12">
      <div>
        <img className="w-full" src={nftHeroImg} alt="img" />{" "}
      </div>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className=" font-work text-3xl font-bold">The Orbitian</h1>
            <p className="font-work text-gray-400 text-sm mt-1">
              Minted On Sep 30, 2022
            </p>
          </div>

          <div>
            <p className="font-work text-gray-400 text-sm">Created By</p>
            <p className="font-work text-white font-semibold mt-1">Orbitian</p>
          </div>

          <div>
            <h2 className="font-work font-semibold text-lg mb-2">
              Description
            </h2>
            <p className="font-work text-gray-300 text-sm leading-relaxed">
              The Orbitian is a collection of 10,000 unique NFTs on the Ethereum
              blockchain.
              <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitian.
              <br />
              <br />
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth...
            </p>
          </div>

          <div>
            <h2 className="font-work font-semibold text-lg mb-2">Details</h2>
            <ul className="font-work space-y-1 text-gray-300 text-sm">
              <li> View on Etherscan</li>
              <li> View Original</li>
            </ul>
          </div>

          <div>
            <h2 className="font-work font-semibold text-lg mb-2">Tags</h2>
            <div className="flex gap-2 flex-wrap">
              {["ANIMATION", "ILLUSTRATION", "MOON", "MOON"].map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#3B3B3B] px-3 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#2A2A2A] rounded-2xl p-6 w-full lg:w-80 flex flex-col items-center justify-center">
          <h3 className="font-work text-gray-400 mb-4">Auction ends in:</h3>
          <div className="flex gap-3 mb-6">
            {["59", "59", "59"].map((num, i) => (
              <div
                key={i}
                className="bg-[#3B3B3B] px-4 py-2 rounded-lg text-center"
              >
                <p className=" font-work text-xl font-bold">{num}</p>
                <p className=" font-work text-xs text-gray-400">
                  {["Hours", "Minutes", "Seconds"][i]}
                </p>
              </div>
            ))}
          </div>
          <button className="font-work bg-purple-600 hover:bg-purple-700 w-full py-2 rounded-lg font-semibold transition">
            Place Bid
          </button>
        </div>
      </div>
    </section>
  );
};

export default NFTHero;
