import React from "react";
import "./AboutUs.css";
import { GiCow, GiHamburger } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import curlyline from "./images/curlyline.jpg";

function AboutUs() {
  return (
    <>
      <div className="about-container" id="AboutUs">
        <h1>
          <span>About</span> Us
        </h1>
        <div className="about-grid">
          <div className="about-grid-item grid1">
            <GiCow className="cow-icon" />
            <div className="underline-img">
              <img src={curlyline} alt="curlyline" className="curly-line" />
            </div>
            <p>
              All our <span>beef</span> is sourced from our own cattle farms,
              ensuring we know with 100% guarantee what our cows have been
              brought up on, bringing you the best beef possible
            </p>
          </div>
          <div className="about-grid-item grid2"></div>
        </div>
        <div className="about-grid2">
          <div className="about-grid-item grid3"></div>
          <div className="about-grid-item grid4">
            <SiCodechef className="chef-icon" />
            <div className="underline-img">
              <img src={curlyline} alt="curlyline" className="curly-line" />
            </div>
            <p>
              Our head chef - <span>Franco</span> has over 30 years experience,
              having trained all around Europe, he is able to bring his own
              flair to the kitchen, making sure our burgers are something you'll
              crave again and again
            </p>
          </div>
        </div>
        <div className="about-grid3">
          <div className="about-grid-item grid5">
            <GiHamburger className="burger-icon" />
            <div className="underline-img">
              <img src={curlyline} alt="curlyline" className="curly-line" />
            </div>
            <p>
              Our very <span>first</span> restaurant was opened in 1991, but the
              inside only had enough space for 6 tables, so we had to take
              advantage of all our outdoor space to welcome all our customers!
            </p>
          </div>
          <div className="about-grid-item grid6"></div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
