import React from "react";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralLayout from "./components/GeneralLayout";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Categories  />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
