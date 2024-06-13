import React from "react";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralLayout from "./components/GeneralLayout";
import ProductsPage from "./components/Products/ProductsPage";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Categories  />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
