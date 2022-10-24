import React, { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({ data: [], cartPopup: false });

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContext;
