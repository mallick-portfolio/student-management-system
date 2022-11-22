import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container flex py-4 justify-between items-center">
      <div>
        <h2 className="title2 text-secondary dark:text-d-secondary">
          IU<span className="text-primary">CSE</span>
        </h2>
      </div>
      {/* Large device menu */}
      <div>
        <ul className="flex items-center gap-6">
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/"}>About</Link>
          </li>
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/"}>Contact Us</Link>
          </li>
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/"}>Research</Link>
          </li>
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="text-sm md:text-base font-semibold text-secondary dark:text-d-secondary">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
