import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Items from "./components/Items";
import ProductPage from "./components/ProductPage";
import DataContext from "./context/data.context";

function App() {
  const { product, setProduct } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);
      console.log(response.data.products);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
