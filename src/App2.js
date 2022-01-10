import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pg2/Contact";
import Home from "./pg2/Home";

const App2 = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App2;
