// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import "./index.css";

import ArtOfBalancingTradeoffs from "./pages/posts/ArtOfBalancingTradeoffs";
import CICDCloudSuperpower from "./pages/posts/CICDCloudSuperpower";
import LLMsRequirementsGathering from "./pages/posts/LLMsRequirementsGathering";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
