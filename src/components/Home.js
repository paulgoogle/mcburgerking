import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container" id="Home">
        <div className="headings-container">
          <h1>
            Welcome to Mc<span>Burger</span>King
          </h1>
          <h2 className="tagline">
            <span> Are you ready....... </span>
            <br />
            For the best burger experience guaranteed?
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
