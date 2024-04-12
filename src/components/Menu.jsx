import React, { useState } from "react";
import "./Menu.css";
import {
  FaDelicious,
  FaBagShopping,
  FaWallet,
  FaChartBar,
  FaRegClock,
} from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <menu>
      <i className="logo">
        <MdSpaceDashboard />
      </i>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => handleClick(0)}
            className={activeIndex === 0 ? "active" : ""}
          >
            <FaDelicious />
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick(1)}
            className={activeIndex === 1 ? "active" : ""}
          >
            <FaBagShopping />
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick(2)}
            className={activeIndex === 2 ? "active" : ""}
          >
            <FaWallet />
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick(3)}
            className={activeIndex === 3 ? "active" : ""}
          >
            <FaChartBar />
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={() => handleClick(4)}
            className={activeIndex === 4 ? "active" : ""}
          >
            <FaRegClock />
          </a>
        </li>
      </ul>
      <ul className="lastMenu">
        <li>
          <a
            href="#"
            onClick={() => handleClick(5)}
            className={activeIndex === 5 ? "active" : ""}
          >
            <IoSettings />
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleClick(6)}
            className={activeIndex === 6 ? "active" : ""}
          >
            <AiOutlineLogin />
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
