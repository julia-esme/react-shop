import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import CartContext from "../context/cart.context";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="sticky top-0 z-50">
      <div className="max-w p-5 flex bg-slate-500 justify-between">
        {/* Logo + Menu */}
        <div className="cursor-pointer">
          <IconContext.Provider value={{ color: "white", size: "30" }}>
            <FiMenu />
          </IconContext.Provider>
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-5 bg-red-400 text-white font-sans font-bold tracking-widest">
            SHOOP
          </h1>
        </Link>

        {/* Cart */}
        <div
          className="cursor-pointer"
          onClick={() =>
            setCart((prev) => {
              return { ...prev, cartPopup: !prev.cartPopup };
            })
          }
        >
          <IconContext.Provider value={{ color: "white", size: "30" }}>
            <FiShoppingCart />
          </IconContext.Provider>
        </div>

        {/* Cart Popup */}
        {cart.cartPopup ? (
          <div className="bg-slate-100 shadow-lg fixed top-[80px] right-0 p-5">
            <div className="">
              <p className="font-light text-xl text-center">YOUR CART</p>

              {/* Products in Cart */}
              <div>
                {cart.data.map((p) => {
                  return (
                    <div>
                      <div className="grid grid-cols-2 gap-5">
                        <img
                          className="w-[100px] h-[50px] object-cover"
                          alt={p.title}
                          src={p.thumbnail}
                        />
                        <div className="grid grid-rows-2">
                          <div>
                            {p.title} x{p.qtt}
                          </div>
                          ${p.price * p.qtt}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="bg-red-400 border-red-400 text-white hover:bg-red-500">
                CHECK OUT
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
