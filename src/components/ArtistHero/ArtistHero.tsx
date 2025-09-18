import React from "react";
import defaultSocial1 from "../../assets/images/footerIcon.svg";
import defaultSocial2 from "../../assets/images/YoutubeLogo.svg";
import defaultSocial3 from "../../assets/images/TwitterLogo.svg";
import defaultSocial4 from "../../assets/images/InstagramLogo.svg";
import defaultCoverImage from "../../assets/images/artistHero.png";
import defaultProfileImage from "../../assets/images/profile.png";

interface ArtistHeroProps {
  name?: string;
  volume?: string;
  nftsSold?: string;
  followers?: string;
  bio?: string;
  wallet?: string;
  profileImage?: string;
  coverImage?: string;
}

const ArtistHero: React.FC<ArtistHeroProps> = ({
  name = "Artist Name",
  volume = "0 ETH",
  nftsSold = "0",
  followers = "0",
  bio = "This is the artist bio section where you can write a short description.",
  wallet = "0x0000...0000",
  profileImage,
  coverImage,
}) => {
  const displayedCover = coverImage || defaultCoverImage;
  const displayedProfile = profileImage || defaultProfileImage;

  return (
    <section className="w-full bg-[#1A1A1A] text-white rounded-b-2xl overflow-hidden">
      <div className="relative w-full h-52 md:h-64 lg:h-72">
        <img
          src={displayedCover}
          alt="Cover"
          className="w-full h-full object-cover"
        />

        <img
          src={displayedProfile}
          alt="Profile"
          className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#1A1A1A] object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16 flex flex-col items-center text-center">
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">{name}</h1>

        <div className="flex flex-wrap justify-center gap-8 mt-4 text-gray-300">
          <div>
            <p className="text-lg font-semibold text-white">{volume}</p>
            <p className="text-sm">Volume</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{nftsSold}</p>
            <p className="text-sm">NFTs Sold</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{followers}</p>
            <p className="text-sm">Followers</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <span className="bg-[#2A2A2A] text-sm px-4 py-2 rounded-full">
            {wallet}
          </span>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-medium">
            Follow
          </button>
        </div>

        <p className="mt-4 text-gray-400 max-w-xl">{bio}</p>

        <div className="flex gap-4 mt-6 text-gray-400 text-lg">
          <img
            src={defaultSocial1}
            alt="Social Icon"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src={defaultSocial2}
            alt="YouTube"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src={defaultSocial3}
            alt="Twitter"
            className="cursor-pointer hover:opacity-80"
          />
          <img
            src={defaultSocial4}
            alt="Instagram"
            className="cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtistHero;
