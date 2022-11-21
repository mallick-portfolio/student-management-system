import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";

const App = () => {
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
    <>
      <button
        className="px-4 py-2 rounded-md bg-black fixed top-5 left-5 text-white dark:text-black dark:bg-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        change mode
      </button>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
