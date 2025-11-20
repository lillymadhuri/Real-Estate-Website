import React from "react";
import "./Carrers.css";
import sri27 from "../images/sri27.jpeg";
import sri19 from "../images/sri19.jpeg";
import sri20 from "../images/sri20.jpeg";
import sri21 from "../images/sri21.jpeg";

function Careers() {
  return (
    <>
    <div className="careers-hero">
      <img
        src={sri27}
        alt="Careers Banner"
        className="careers-hero-img"/>
       <div className="careers-hero-text">
        <h1>CAREERS</h1>
      </div>
       </div>
      <div className="career-form-section">
       <form className="career-form">

      <div className="form-group">
      <label>NAME</label>
     <input type="text" placeholder="Name" />
     </div>

    <div className="form-group">
     <label>EMAIL</label>
     <input type="email" placeholder="Email" />
    </div>

    <div className="form-group">
      <label>MOBILE</label>
      <input type="tel" placeholder="Mobile" />
    </div>

    
<div className="form-group">
  <label>RESUME</label>

  <div className="resume-input-box">
    <input type="file" className="file-input" />

    <button className="apply-btn">Apply Now</button>
    </div>
    </div>
    </form>
    </div>
   <div className="career-info-section">
  
  <div className="career-info-left">
    <h1 className="careers-title">CAREERS AT</h1>
    <h1 className="career-title-gold">SHHT</h1>
    <p className="career-subtitle">Build Your Future with Sri Hari Homes</p>
  </div>

  <div className="career-info-right">
    <p>
      Be a part of our growth story by joining us. SriHari Homes offers a
      conducive working environment, full of challenges and rewards, that is 
      bound to nurture your career and take it to greater heights. Apply here 
      and we will get back to you as soon as we can.
    </p>
  </div>
  </div>
  <div className="career-row">

  <div className="career-box">
    <img src={sri19} alt="Job" className="career-img" />
    <h2 className="career-title">SENIOR MANAGER SALES</h2>
    <p className="career-job-desc">We are looking for a high-performing Sales
      Manager to help us meet our customer 
       acquisition and revenue growth targets by 
        keeping our company competitive and  
        innovative.</p>
    <p className="career-type">Job type:Full-Time</p>
    <p className="career-exp">Experience:3Years</p>
  </div>

  <div className="career-box">
    <img src={sri20} alt="Job" className="career-img" />
    <h2 className="career-title">TELE CALLERS (FEMALE)</h2>
    <p className="career-job-desc">We are looking for a high-performing Sales
      Manager to help us meet our customer 
       acquisition and revenue growth targets by 
        keeping our company competitive and  
        innovative.</p>
    <p className="career-type">Job type:Full-Time</p>
    <p className="career-exp">Experience:3Years</p>
  </div>

  <div className="career-box">
    <img src={sri21} alt="Job" className="career-img" />
    <h2 className="career-title">FIELD SALES OFFICER</h2>
    <p className="career-job-desc">We are looking for a high-performing Sales
      Manager to help us meet our customer 
       acquisition and revenue growth targets by 
        keeping our company competitive and 
        innovative.</p>
    <p className="career-type">
      job type:Full-Time</p>
    <p className="career-exp">Experience:3Years</p>
  </div>
</div>
</>

      
      
    
  );
}

export default Careers;
