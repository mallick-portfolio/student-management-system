import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetUserQuery,
  useSignOutUserMutation,
} from "../../features/api/userApi";

const Header = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
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
      <div className="hidden lg:block">
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
          {status === "active" ? (
            <li className="relative">
              <button onClick={() => setActive(!active)}>
                <img
                  className="w-12 rounded-full border-2 border-primary dark:border-primary"
                  src="https://placeimg.com/192/192/people"
                  alt="user avatar"
                />
              </button>
              <div
                className={`absolute z-50 w-64 rounded-md text-left py-6 text-secondary dark:text-d-secondary bg-gradient-box-w dark:bg-d-gradient-box-w shadow-light-white-3 ease-in duration-300 dark:shadow-dark-white-3 ${
                  active ? "top-14 right-5" : "right-5 top-[-500px]"
                }`}
              >
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 rounded-full border-2 border-primary dark:border-primary"
                    src="https://placeimg.com/192/192/people"
                    alt="user avatar"
                  />
                  <button className="common-btn1">View Profile</button>
                </div>
                <ul className="pl-5 flex flex-col gap-3 pt-4">
                  <li>User</li>
                  <li>Teacher</li>
                  <li>Editor</li>
                </ul>
                <div className="flex flex-col items-center">
                  <button
                    className="common-btn1"
                    onClick={() => signout({ status: "inactive" })}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </li>
          ) : (
            <li className="common-btn1">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setShow(!show)} className="">
          <Bars3Icon className="w-12 h-8 text-secondary dark:text-d-secondary bg-gradient-box-w dark:bg-d-gradient-box-w rounded-full shadow-light-white-3 dark:shadow-dark-white-3" />
        </button>
      </div>

      {/* Mobile device Menu */}
      <div
        className={`block lg:hidden bg-gradient-box-w dark:bg-d-gradient-box-w fixed h-screen z-40 w-72 ease-in duration-300 ${
          show ? "top-0 right-0" : "top-0 right-[-500px]"
        }`}
      >
        <div>
          <button onClick={() => setShow(!show)}>
            <XMarkIcon className="w-10 p-1 h-10 absolute top-4 -left-4 text-secondary dark:text-d-secondary shadow-light-white-3 dark:shadow-dark-white-3 rounded-full bg-gradient-box-w dark:bg-d-gradient-box-w" />
          </button>
        </div>
        <div className="mx-auto flex flex-col items-center pt-5">
          <button onClick={() => setActive(!active)}>
            <img
              className="w-12 rounded-full border-2 border-primary dark:border-primary"
              src="https://placeimg.com/192/192/people"
              alt="user avatar"
            />
          </button>
          <div
            className={`absolute z-50 w-64 rounded-md text-left py-6 text-secondary dark:text-d-secondary bg-gradient-box-w dark:bg-d-gradient-box-w shadow-light-white-3 ease-in duration-300 dark:shadow-dark-white-3 ${
              active ? "top-24 right-16" : "right-16 top-[-500px]"
            }`}
          >
            <div className="flex flex-col items-center">
              <img
                className="w-16 rounded-full border-2 border-primary dark:border-primary"
                src="https://placeimg.com/192/192/people"
                alt="user avatar"
              />
              <button className="common-btn1">View Profile</button>
            </div>
            <ul className="pl-5 flex flex-col gap-3 pt-4">
              <li>User</li>
              <li>Teacher</li>
              <li>Editor</li>
            </ul>
            <div className="flex flex-col items-center">
              <button
                className="common-btn1"
                onClick={() => signout({ status: "inactive" })}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <ul className="flex flex-col items-start pl-8 pt-8 gap-2">
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
          {status === "active" ? (
            <li className="common-btn1">
              <button onClick={() => signout({ status: "inactive" })}>
                Sign out
              </button>
            </li>
          ) : (
            <li className="common-btn1">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
