import React from "react";
import "./Footer.css";
import sri1 from "../images/sri1.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-left">
          <img src={sri1} alt="Logo" className="footer-logo" />
          <p className="footer-tagline">ADDRESS</p>
          <div className="footer-info">
            <p>
              SV Pinnacle Complex,<br />
              Plot No.6 & 50, Shirdi Hills, Isnapur<br />
              Village Rd, Patancheru, Mandal,<br />
              Mumbai Highway Road<br />
              Hyderabad, TS 502307
            </p>
          </div>
        </div>

       
        <div className="link-section">
          <div className="link-card">
            <h2>MOBILE</h2>
            <p>+91 70325 99541</p>
          </div>
          <div className="link-card">
            <h2>EMAIL</h2>
            <p>info@sriharihomes.in</p>
          </div>
          <div className="link-card">
            <h2>FACEBOOK</h2>
          </div>
          <div className="link-card">
            <h2>INSTAGRAM</h2>
          </div>
          <div className="link-card">
            <h2>LINKEDIN</h2>
          </div>
        </div>
      </div>

      
      <div className="footer-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>NRI</li>
          <li>Contact</li>
          <li>Disclaimer</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-bottom">
        © 2025, All Rights Reserved By Sri Hari Homes & Townships
      </div>
    </footer>
  );
};

export default Footer;
