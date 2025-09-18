import React from "react";
import facebookIcon from "../../assets/images/footerIcon.svg";
import youtubeIcon from "../../assets/images/YoutubeLogo.svg";
import TwitterIcon from "../../assets/images/TwitterLogo.svg";
import instagramIcon from "../../assets/images/InstagramLogo.svg";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3B3B3B] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">NFT Marketplace</h3>
          <p className="text-gray-300 text-sm mb-4">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-gray-300 text-sm mb-3">Join our community</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <img src={facebookIcon} alt="icon" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <img src={instagramIcon} alt="icon" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <img src={TwitterIcon} alt="icon" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <img src={youtubeIcon} alt="icon" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rankings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Connect a wallet
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Join Our Weekly Digest</h3>
          <p className="text-gray-300 text-sm mb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-4 py-2 rounded-full text-black outline-none"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 transition text-white px-5 py-2 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-xs">
        © NFT Market. Use this template freely.
      </div>
    </footer>
  );
};

export default Footer;
