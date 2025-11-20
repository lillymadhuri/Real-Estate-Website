import React from "react";
import "./About.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import sri22 from "../images/sri22.jpeg";
import sri21 from "../images/sri21.jpeg";
import sri20 from "../images/sri20.jpeg";
import sri19 from "../images/sri19.jpeg";
function About(){
return (
    <>
    <section className="about">
      <h1>ABOUT US</h1>
    </section>
      {/* Blue section */}
      <section className="about-hero">
        <h1>ABOUT <span>US</span></h1>
      </section>

      {/* White section */}
      <section className="about-content">
        <h2>Make Your Dream Home a Reality with Sri Hari Homes</h2>
        <p>
          Owning a beautiful and dignified space called “home” is a deeply cherished dream for many families.<br/>
          At Sri Hari Homes, we understand this profound longing and are wholeheartedly committed to transforming
          your dream into a living, breathing masterpiece:Your Home
        </p>

        <h3>OUR MISSION</h3>
        <p>
          Headquartered in 8-60/6, Patancheru–Shankarpalli Road, Sangareddy District, Hyderabad – 502300,
          Sri Hari Homes & Townships was founded with one sole objective — to build world-class structures that people proudly call home.We place our customers’ needs and interests at the heart of everything we do.
        </p>

        <p>
          We’ve earned our place as a trusted partner for families seeking homes within their financial reach.
          We specialize in designing spacious and functional villas, apartments, and individual homes tailored to diverse family needs.
          Every project is built with meticulous attention to detail, guided by our core values and passion for quality.
        </p>
        <p>Every project is built with meticulous attention to detail, guided by our core values and passion for quality.
        </p>
        <div className="about-features">
  <div className="feature-card dark">
    <i className="fas fa-eye feature-icon"></i>
    <h3>TRANSPARENCY</h3>
    <p>Open and honest communication throughout every step.</p>
  </div>

  <div className="feature-card light">
    <i className="fas fa-clipboard-check feature-icon"></i>
    <h2>QUALITY</h2>
    <p className="card">Lasting construction with minimal maintenance, high-quality materials.</p>
  </div>

  <div className="feature-card dark">
    <i className="fas fa-hand-holding-usd feature-icon"></i>
    <h3>FAIR PRICING</h3>
    <p>Transparent and fair costs that fit your budget.</p>
  </div>

  <div className="feature-card light">
    <i className="fas fa-cogs feature-icon"></i>
    <h2>LIFELONG SERVICE</h2>
    <p className="card">Dedicated support and service beyond handover.</p>
  </div>
</div>
<div className="strengths-section">
  <h2 className="strengths-title">
    UNMATCHED <span>STRENGTHS</span>
  </h2>

  <div className="strengths-grid">
    <div className="strength-card">
      <i className="strength-icon fas fa-home"></i>
      <div className="strength-text"></div>
      <h3>Award-Winning Design</h3>
      <p>
         Functional and airy homes in holistically designed environments with ample green spaces, recreational facilities.
      </p>
    </div>

    <div className="strength-card">
      <i className="strength-icon fas fa-users"></i>
      <h3>Continuous Innovation</h3>
      <p>We actively research and adopt the latest technologies for project benefits and adapt to evolving customer needs.
        </p>
    </div>
  <div className="strength-card">
      <i className="strength-icon fas fa-handshake"></i>
      <h3>Community Focused</h3>
      <p>
       We build strong relationships with families and communities, ensuring lasting connections.
      </p>
    </div>

    <div className="strength-card">
      <i className="strength-icon fas fa-lightbulb"></i>
      <h3>Best-in-Class Teams</h3>
      <p>We collaborate with top talent in architecture, materials, construction, project management, and marketing
       </p>
    </div>
    <div className="strength-card">
      <i className="strength-icon fas fa-lightbulb"></i>
      <h3>Sustainable Practices</h3>
      <p>We use eco-friendly construction methods to minimize environmental.</p>
    </div>
    <div className="strength-card">
      <i className="strength-icon fas fa-lightbulb"></i>
      <h3>On-Time Delivery</h3>
      <p>We consistently deliver homes on time, often exceeding deadlines.</p>
    </div>
    <div className="strength-card">
      <i className="strength-icon fas fa-lightbulb"></i>
      <h3>Commitment to Excellence</h3>
      <p>We exceed expectations with high standards and ethical conduct</p>
    </div>
    <div className="strength-card">
      <i className="strength-icon fas fa-lightbulb"></i>
      <h3>Passionate Workforce</h3>
      <p>Our dedication sets us apart in a trust-sensitive industry.</p>
    </div>
  </div>
</div>
<div className="about-blue-section">
<h2 className="about-heading">WHY CHOOSE US</h2>
<p>Ready to Build Your Dream Home? Contact us today to share your vision<br/>
and begin your journey to “Your Home,” the dream made real.</p>
<div className="about-cards">
       <div className="about-card1">
         <h3 className="about-title1">Built on Trust and Transparency</h3>
          <img src={sri19} className="about-img" alt="icon1" />
          <p className="about-text1">
            In the real estate business, trust is <br/>
            paramount. We hold a strong <br/>
            reputation for transparency, with <br/>
            clear and comprehensive contracts. </p>
        </div>
           <div className="about-card2">
             <h3 className="about-title2">Unmatched Quality</h3>
          <img src={sri20} className="about-img" alt="icon2" />
         <p className="about-text2">
           Every Sri Hari home is built with<br/>
            meticulous attention to detail and <br/>
            high-quality materials, creating lasting value and meeting the<br/>
             highest global standards.
          </p>
        </div>
          <div className="about-card1">
            <h3 className="about-title1">Tailored to Your Needs</h3>
          <img src={sri21} className="about-img" alt="icon3" />
          <p className="about-text1">
           We understand that every family’s<br/>
            needs are unique. We offer a wide<br/>
             range of customizable options and <br/>
             work closely with you to design a <br/>
          </p>
        </div>
           <div className="about-card2">
            <h3 className="about-title2">Lifelong Partnership</h3>
          <img src={sri22} className="about-img" alt="icon4" />
          <p className="about-text2">
           Our dedication extends beyon2d<br/>
            handover. We provide <br/>
            comprehensive after-sales support,<br/>
             always ready to answer your <br/>
             questions and address concerns.
          </p>
        </div>
        </div>
        </div>



      </section>
    </>
  );
}

export default About;