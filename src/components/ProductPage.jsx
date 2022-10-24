import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/data.context";
import CartContext from "../context/cart.context";

const ProductPage = () => {
  const { product, setProduct } = useContext(DataContext);
  const [item, setItem] = useState(null);

  const { cart, setCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const increment = () => {
    setAmount(amount + 1);
  };

  const addCart = () => {
    setCart((prev) => {
      return {
        data: [
          ...prev.data,
          {
            qtt: amount,
            id: item.id,
            title: item.title,
            thumbnail: item.thumbnail,
            price: item.price,
          },
        ],
        cartPopup: true,
      };
    });
  };

  // Individual Product Pages
  let { id } = useParams();

  useEffect(() => {
    setItem(product.find((p) => p.id === parseInt(id)));
    console.log(id);
  }, [product, id]);

  return (
    <>
      {item ? (
        <div className="grid grid-cols-2 gap-4 flex-wrap">
          {/* Left Side */}
          <div className="p-10 grid justify-end">
            <img
              className="border mb-5"
              alt={item.title}
              src={item.images[0]}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-3 w-full">
              <img
                className="w-full h-[100px] object-cover border"
                alt={item.title}
                src={item.images[0]}
              />
              <img
                className="w-full h-[100px] object-cover border"
                alt={item.title}
                src={item.images[1]}
              />
              <img
                className="w-full h-[100px] object-cover border"
                alt={item.title}
                src={item.images[2]}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="p-20 grid grid-row gap-5 items-center justify-between">
            <p className="text-4xl font-bold">{item.title}</p>
            <p>{item.rating}/5</p>
            <p className="text-4xl font-light">${item.price}</p>
            <p>{item.description}</p>
            <div className="flex gap-5 justify-start content-center align-center py-2">
              <button
                className="text-xl border-slate-500 text-slate-500 hover:bg-slate-100"
                onClick={decrement}
              >
                -
              </button>
              <p className="text-3xl">{amount}</p>
              <button
                className="text-xl border-slate-500 text-slate-500 hover:bg-slate-100"
                onClick={increment}
              >
                +
              </button>
            </div>

            <button
              onClick={addCart}
              className="lg:w-1/2 border-red-400 bg-red-400 text-white hover:bg-red-500"
            >
              add to cart
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductPage;
