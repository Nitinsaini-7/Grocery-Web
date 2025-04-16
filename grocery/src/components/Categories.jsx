import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  return (
    <div className="mt-16">
      <p className=" text-2xl md:text-3xl font-medium">Category</p>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className=" group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col items-center justify-center "
            style={{ backgroundColor: item.bgColor }}
            onClick={() => {
              navigate(`/products/${item.path.toLowerCase()}`);
                scrollTo(0,0)
            }}
          >
            <img
              src={item.image}
              className="group-hover:scale-105 transition  max-w-32"
              alt=""
            />
            <p className=" text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
