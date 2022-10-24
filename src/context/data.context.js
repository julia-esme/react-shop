import React, { createContext, useState } from "react";

const DataContext = createContext([]);

export const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <DataContext.Provider value={{ product, setProduct }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContext;
