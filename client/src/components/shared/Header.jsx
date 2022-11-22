import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetUserQuery,
  useSignOutUserMutation,
} from "../../features/api/userApi";

const Header = () => {
  const { data, error, isLoading } = useGetUserQuery();
  const [signout] = useSignOutUserMutation();

  const status = data?.data?.status;

  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="container flex py-4 justify-between items-center">
      <div>
        <h2 className="title2 text-secondary dark:text-d-secondary">
          <Link to={"/"}>
            IU<span className="text-primary">CSE</span>
          </Link>
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
          {status === "inactive" ? (
            <li className="common-btn1">
              <Link to={"/login"}>Login</Link>
            </li>
          ) : (
            <li className="common-btn1">
              <button onClick={() => signout({ status: "inactive" })}>
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
