import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import userIcon from "../../assets/images/User.svg";
import menuIcon from "../../assets/images/menuIcon.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/account");
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#1A1A1A] text-white px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center space-x-2">
        <span className="bg-purple-600 p-2 rounded-md">
          <img src={logo} alt="logo" className="h-6 w-auto" />
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-gray-300">
        <a href="#" className="hover:text-white">
          Marketplace
        </a>
        <a href="#" className="hover:text-white">
          Rankings
        </a>
        <a href="#" className="hover:text-white">
          Connect a wallet
        </a>
        <a href="artist" className="hover:text-white">
          Artist Page
        </a>
        <a href="#" className="hover:text-white">
          NFT Page
        </a>
      </div>

      <div className="hidden md:block">
        <button
          onClick={handleSignUp}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center gap-2"
        >
          Sign Up
          <img src={userIcon} alt="icon" className="h-4 w-4" />
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menuIcon} alt="menu" className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] text-gray-300 flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <a
            href="#"
            className="hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Marketplace
          </a>
          <a
            href="#"
            className="hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Rankings
          </a>
          <a
            href="#"
            className="hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Connect a wallet
          </a>
          <button
            onClick={handleSignUp}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center gap-2"
          >
            Sign Up
            <img src={userIcon} alt="icon" className="h-4 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
