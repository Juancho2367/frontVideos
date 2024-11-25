import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Explora Videos Cortos</h1>
      <div className="video-grid">
        {/* Aquí renderizarías los videos dinámicamente */}
        <div className="video-card">Video 1</div>
        <div className="video-card">Video 2</div>
        <div className="video-card">Video 3</div>
      </div>
    </div>
  );
};

export default Home;
