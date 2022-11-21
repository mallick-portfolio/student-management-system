import React, { useEffect, useState } from "react";

const Signup = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="w-screen h-screen flex justify-center bg-body-bg dark:bg-d-body-bg items-center">
      <div className="w-auto lg:w-1/2 bg-gradient-box-w dark:bg-d-gradient-box-w shadow-light-white-3 dark:shadow-dark-white-3 rounded-lg p-8">
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>change mode</button>
          <h2 className="title1 text-center text-color-lightn dark:text-d-color-lightn">
            Sing Up
          </h2>
          <form>
            <div>
              <input type="text" className="w-full outline-none border" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
