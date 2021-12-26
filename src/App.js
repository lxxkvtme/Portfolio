import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
