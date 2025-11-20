import React from "react";
import "./Media.css";
import sri24 from "../../images/sri24.jpeg";
import sri25 from "../../images/sri25.jpeg";
import sri26 from "../../images/sri26.jpeg";

function Media() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="media-hero">
        <img src={sri24} alt="Media Banner" className="media-hero-img" />
        <div className="media-hero-text">
          <h1>MEDIA</h1>
        </div>
      </div>

      {/* MEDIA COVERAGE SECTION */}
      <div className="media-coverage-section">
        <h2>MEDIA <span>COVERAGE </span></h2>

        <div className="media-coverage-grid">
          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>
          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>

          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>
          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>

          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>
          <div className="media-coverage-card"><img src={sri25} alt="" /></div>
          <div className="media-coverage-card"><img src={sri26} alt="" /></div>
        </div>
      </div>

    </div>
  );
}

export default Media;
