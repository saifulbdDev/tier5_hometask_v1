import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Facebook from "../pages/facebook";
import Instagram from "../pages/Instagram"

import PageNotFound from "../pages/notfound";
import Home from "../pages/Home";

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="*" element={<PageNotFound />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
