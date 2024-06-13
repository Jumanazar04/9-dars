import React from "react";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralLayout from "./components/GeneralLayout";
import { Breadcrumb } from "antd";

const MyBreadcrumb = () => {
  const breadcrumbItems = [
    {
      title: 'Home',
      href: '/', // Optionally add a link
    },
    {
      title: 'List',
      href: '/list', // Optionally add a link
    },
    {
      title: 'App',
      href: '/app', // Optionally add a link
    },
  ];

  return (
    <Breadcrumb items={breadcrumbItems} />
  );
};


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Categories  />} />
        <Route path="/" element={<MyBreadcrumb />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
