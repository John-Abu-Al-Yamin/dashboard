import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const TopContainer = () => {
  const [displayStyle, setDisplayStyle] = useState("none");
  const [rotateStyle, setRotateStyle] = useState("");

  const toggleDisplay = () => {
    setDisplayStyle(displayStyle === "block" ? "none" : "block");
    setRotateStyle(rotateStyle === "" ? "rotate(180deg)" : "");
  };

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search item, Collections" />
        <i>
          <IoMdSearch />
        </i>
      </div>
      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage"></div>
        <p className="profileName">John Emad</p>
        <i
          className="menuChevron"
          onClick={toggleDisplay}
          
          style={{ transform: rotateStyle }}
        >
          <FaChevronDown />
        </i>
        <div className="menuContainer" style={{ display: displayStyle }}>
          <ul>
            <li>Web Design</li>
            <li>UI / UX</li>
            <li>From Design</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
