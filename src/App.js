import React from "react";
import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import MaxWidthWrapper from "./Components/utils/maxwidthwrapper";

const App = () => {
  return (
    <MaxWidthWrapper>
      <div className="name">
        <h1 className="button"> Contact Us</h1>
      </div>
      <div className="heading">
        <h2>We are here to make your Experience Amazing!</h2>
      </div>
      <div className="card">
        <div className="Cards-container1">
          <img src="https://cdn-icons-png.flaticon.com/128/5329/5329515.png" />
          <h1 className="cards1">Sales</h1>
          <p className="paragraph1">
            want to Adopt Akrivia HCM? Connect with our Sales in hcm
          </p>
          <button className="button1">sales@akriviahcm.com</button>
        </div>
        <div className="Cards-container2">
          <img src="https://cdn-icons-png.flaticon.com/128/10439/10439779.png" />
          <h1 className="cards2">Support</h1>
          <p className="paragraph2">
            need any assistance with ahrivia hcm connect with our support
          </p>
          <button className="button2">support@akriviahcm.com</button>
        </div>
        <div className="Cards-container3">
          <img src="https://cdn-icons-png.flaticon.com/128/493/493808.png" />
          <h1 className="cards3">Partnerships</h1>
          <p className="paragraph3">
            want to become a partner? connect with our partnership team
          </p>
          <button className="button3">partnership@akriviahcm.com</button>
        </div>
      </div>
      <div className="footers">
        <h2 className="footers-container">
          Connect with us over Social Platforms!
        </h2>
        <div className="icons">
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <CiFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default App;
