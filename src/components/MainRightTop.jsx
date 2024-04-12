import React from "react";

const MainRightTop = () => {
  return (
    <div className="topCard">
      <div className="topCard-name">
        <h2>Statistics</h2>
        <a>View More</a>
      </div>
      <div className="earning">
        <p>
          Artwork sold <span>187</span>
        </p>
        <p>
          Artwork Canceled <span>5</span>
        </p>
        <p>
          Artwork Pending <span>25</span>
        </p>
        <p>
          Artwork Delivered <span>200</span>
        </p>
        <p>
          Total <span>262 ETH</span>
        </p>
      </div>
    </div>
  );
};

export default MainRightTop;
