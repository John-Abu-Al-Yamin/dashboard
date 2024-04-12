import React from "react";
import banner from "../image/banner.jpg";
const MainRightBottom = () => {
  return (
    <>
      <div className="bottomRightCard">
        <div className="bottomName">
          <h2>Top Seller</h2>
          <a href="">View More</a>
        </div>
        <div className="topSeller">
          <div className="topSellerImg">
            <img src={banner} alt="" />
          </div>
          <p className="topSellerName">
            Sample Name <span>@sample</span>
          </p>
          <a href="" className="button-1 btn">
            Follow
          </a>
        </div>
        <div className="topSeller">
          <div className="topSellerImg">
            <img src={banner} alt="" />
          </div>
          <p className="topSellerName">
            Sample Name <span>@sample</span>
          </p>
          <a href="" className="button-1 btn">
            Follow
          </a>
        </div>
        <div className="topSeller">
          <div className="topSellerImg">
            <img src={banner} alt="" />
          </div>
          <p className="topSellerName">
            Sample Name <span>@sample</span>
          </p>
          <a href="" className="button-1 btn">
            Follow
          </a>
        </div>
        <div className="topSeller">
          <div className="topSellerImg">
            <img src={banner} alt="" />
          </div>
          <p className="topSellerName">
            Sample Name <span>@sample</span>
          </p>
          <a href="" className="button-1 btn">
            Follow
          </a>
        </div>
      </div>
    </>
  );
};

export default MainRightBottom;
