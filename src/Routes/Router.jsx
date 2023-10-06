import React from "react";
import { Route, Routes } from "react-router-dom";
import OthersPage from "../pages/OthersPage";
import Home from "../pages/Home";
import Mehridaryo from "../pages/Mehridaryo";
import Qirgiz from "../pages/Qirgiz";

const Router = () => {
  return (
    <Routes>
      <Route path="/otherspage" element={<OthersPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/mehridaryo" element={<Mehridaryo />} />
      <Route  path="/kirgiz" element = {<Qirgiz/>} />
    </Routes>
  );
};

export default Router;
