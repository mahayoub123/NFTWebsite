import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Categories: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <section className="w-full py-10 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6 font-work">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative group rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p className="text-white text-lg font-work">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
