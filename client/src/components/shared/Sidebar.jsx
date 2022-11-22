import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="rounded-md fixed left-0 w-20 pr-5 hover:w-64 h-screen text-left py-6 text-secondary dark:text-d-secondary bg-gradient-box-w dark:bg-d-gradient-box-w shadow-light-white-3 ease-in duration-300 dark:shadow-dark-white-3">
      <ul className="flex flex-col gap-3">
        <li className="header-nav-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="header-nav-item">
          <Link to={"/"}>About</Link>
        </li>
        <li className="header-nav-item">
          <Link to={"/"}>Contact</Link>
        </li>
        <li className="header-nav-item">
          <Link to={"/"}>Blog</Link>
        </li>
        <li className="header-nav-item">
          <Link to={"/"}>Research</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
