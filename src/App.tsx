import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Facebook from "./pages/facebook";
import Instagram from "./pages/Instagram/Instagram";

import PageNotFound from "./pages/Notfound/Notfound";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
