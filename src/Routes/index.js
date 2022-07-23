import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const { Component, path } = route;

        return <Route key={index} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

const publicRoutes = [
  {
    path: "/",
    Component: Home,
  },
];

export default AppRoutes;
