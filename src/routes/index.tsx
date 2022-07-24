import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FacebookLayout from "../layouts/FacebookLayout";

import GamingPage from "../pages/gaming";
import HomePage from "../pages/home";

import MarketplacePage from "../pages/marketplace";
import PageNotFound from "../pages/notfound";
import ProfilePage from "../pages/profile";

import WatchPage from "../pages/watch";


const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<FacebookLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/watch" element={<WatchPage/>} />
        <Route path="/marketplace" element={<MarketplacePage/>} />
        <Route path="/gaming" element={<GamingPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />        
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
