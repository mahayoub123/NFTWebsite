import React from "react";
import createAccountImg from "../../assets/images/createAccount.png";

const CreateAccount: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={createAccountImg}
          alt="Create Account"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-white font-work">
            Create Account
          </h1>
          <p className="text-gray-300 text-sm font-work">
            Welcome! Enter Your Details And Start Creating, Collecting And
            Selling NFTs.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-full bg-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-full bg-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-full bg-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-full bg-white focus:outline-none"
            />
          </div>

          <button className=" font-work w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full transition">
            Create account
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
