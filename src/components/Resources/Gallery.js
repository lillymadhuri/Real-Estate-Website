import React from 'react'
import "./Gallery.css";
import sri22 from "../../images/sri22.jpeg";
import sri21 from "../../images/sri21.jpeg";
import sri20 from "../../images/sri20.jpeg";
import sri19 from "../../images/sri19.jpeg";
import sri18 from "../../images/sri18.jpeg";
import sri17 from "../../images/sri17.jpeg";
import sri16 from "../../images/sri16.jpeg";
import sri15 from "../../images/sri15.jpeg";
import sri14 from "../../images/sri14.jpeg";
import sri13 from "../../images/sri21.jpeg";
import sri12 from "../../images/sri20.jpeg";
import sri11 from "../../images/sri11.jpeg";
import sri10 from "../../images/sri11.jpeg";
import sri9 from "../../images/sri9.jpeg";
import sri8 from "../../images/sri8.jpeg";
import sri7 from "../../images/sri7.jpeg";
import sri6 from "../../images/sri6.jpeg";
import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import video4 from "../../images/video4.mp4";


function Gallery() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="gallery-hero">
        <img src={sri22} alt="Gallery" className="gallery-hero-img" />
        <div className="gallery-hero-text">
          <h1>Gallery</h1>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="gallery-section">
        <h2 className="gallery-heading">Our<span>Gallery</span></h2>

        <div className="gallery-grid">
          <img src={sri21} alt="gallery" />
          <img src={sri20} alt="gallery" />
          <img src={sri19} alt="gallery" />
          <img src={sri18} alt="gallery" />
          <img src={sri17} alt="gallery" />
          <img src={sri16} alt="gallery" />
          <img src={sri15} alt="gallery" />
          <img src={sri14} alt="gallery" />
        </div>
      </div>
      <div className="gallery-section1">
        <h2 className="gallery-heading1">
          Yes, <span>Work in Progress</span>
        </h2>
     <div className="gallery-grid1">
          <img src={sri13} alt="" />
          <img src={sri12} alt="" />
          <img src={sri11} alt="" />
          <img src={sri10} alt="" />
          <img src={sri9} alt="" />
          <img src={sri8} alt="" />
          <img src={sri7} alt="" />
          <img src={sri6} alt="" />
        </div>
        <div className="wip-video-grid">
  <video src={video1} controls />
  <video src={video2} controls />
  <video src={video3} controls />
  <video src={video4} controls />
</div>
      </div>
    </>
    
  );
}

export default Gallery;
