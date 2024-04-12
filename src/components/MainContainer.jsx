import React from "react";
import "./MainContainer.css";
import banner from "../image/banner.jpg";
import CardMain from "./CardMain";
import MainRightBottom from "./MainRightBottom";
import MainRightTop from "./MainRightTop";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded By Alexander Vernof</p>
            <div className="bid">
                <button className="button-1">Bid Now</button>
                <p>Ending in</p>
            </div>
          </div>
        </div>
        <div className="cards">
            <div className="filters">
                <div className="popular">
                    <h2>Feed</h2>
                    <button className="button-2">
                        Popular
                    </button>
                </div>
                <div className="filter-btn">
                    <button className="button-1">All</button>
                    <button className="button-2">Art</button>
                    <button className="button-2">Games</button>
                    <button className="button-2">Toutoral</button>
                </div>
            </div>
          <main>
            <CardMain/>
          </main>
        </div>
      </div>

      <div className="right">
        <MainRightTop/>
        <MainRightBottom/>
      </div>
    </div>
  );
};

export default MainContainer;
