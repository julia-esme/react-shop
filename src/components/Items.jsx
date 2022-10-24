import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import DataContext from "../context/data.context";

const Items = () => {
  const [filtered, setFiltered] = useState([]);
  const { product, setProduct } = useContext(DataContext);

  useEffect(() => {
    setFiltered(product);
  }, [product]);

  // Filter category
  const filterType = (category) => {
    setFiltered(
      product.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <>
      {/* Filter Products */}
      <div className="px-4 py-5">
        <p className="font-light text-2xl text-center text-slate-500 mb-5">
          CATEGORIES
        </p>
        <div className="flex content-between flex-wrap gap-5 justify-center">
          <button
            onClick={() => setFiltered(product)}
            className=" border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:bg-red-400 focus:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterType("smartphones")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Smartphones
          </button>
          <button
            onClick={() => filterType("laptops")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Laptops
          </button>
          <button
            onClick={() => filterType("fragrances")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Fragrances
          </button>
          <button
            onClick={() => filterType("skincare")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Skincare
          </button>
          <button
            onClick={() => filterType("groceries")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Groceries
          </button>
          <button
            onClick={() => filterType("home-decoration")}
            className=" border-slate-500 text-slate-400 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
          >
            Home Decoration
          </button>
        </div>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {filtered.map((item, index) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div
              key={index}
              className="rounded-lg shadow-lg hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                className="w-full h-[250px] object-cover rounded-t-lg"
                alt={item.title}
                src={item.thumbnail}
              />
              <div className="flex justify-between">
                <p className="text-slate-600 p-5 font-bold"> {item.title} </p>
                <p className="text-slate-600 p-5"> ${item.price} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Items;
