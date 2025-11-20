import React from "react";
import "./Blog.css";
import sri23 from "../../images/sri23.jpeg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import sri11 from "../../images/sri11.jpeg";
import sri12 from "../../images/sri12.jpeg";
import sri13 from "../../images/sri13.jpeg";
import sri14 from "../../images/sri14.jpeg";
import sri15 from "../../images/sri15.jpeg";
import sri16 from "../../images/sri16.jpeg";
function Blog() {
  return (
    <div>
        
    <div className="blog-hero">
      <img src={sri23} alt="Blog Banner" className="blog-hero-img" />
      <div className="blog-hero-text">
        <h1>BLOGS</h1>
      </div>
     </div>
     <div className="blog-container">
     <div className="blog-top-section">
  <h2 className="blog-title">OUR<span>BLOG</span></h2>
  <div className="blog-search">
    <input type="text" placeholder="Search blog…" />
    <i className="fas fa-search search-icon"></i>
 </div>
</div>
</div>
<div className="blog-grid">
  <div className="blog-card">
    <img src={sri11} alt="Blog 1" />
    <p>Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu</p>
    <a href="#" className="read-more">Read More</a>
  </div>
  <div className="blog-card">
     <img src={sri12} alt="Blog 1" />
    <p> Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu 
    </p>

    <a href="#" className="read-more">Read More</a>
  </div>

  {/* 3 */}
  <div className="blog-card">
     <img src={sri13} alt="Blog 1" />
    <p> Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu
    </p>
    <a href="#" className="read-more">Read More</a>
  </div>

  {/* 4 */}
  <div className="blog-card">
     <img src={sri14} alt="Blog 1" />
    <p> Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu
    </p>
    <a href="#" className="read-more">Read More</a>
  </div>

  {/* 5 */}
  <div className="blog-card">
     <img src={sri15} alt="Blog 1" />
     <p>Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu</p>
    <a href="#" className="read-more">Read More</a>
  </div>

  {/* 6 */}
  <div className="blog-card">
     <img src={sri16} alt="Blog 1" />
     <p>Hyderabad Real Estate Price 
        Index 2025: Spotlight on 
        Patancheruvu</p>
    <a href="#" className="read-more">Read More</a>
  </div>

</div>

</div>


    
  );
}

export default Blog;
