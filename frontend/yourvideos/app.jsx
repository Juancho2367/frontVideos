import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import UploadVideo from "./src/pages/UploadVideo";

const app = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Plataforma de Videos</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/upload" element={<UploadVideo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default app;