import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    <div className="bg-body-bg dark:bg-d-body-bg w-screen min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
      <button
        className="px-4 py-2 rounded-md bg-black fixed bottom-5 right-5 text-white dark:text-black dark:bg-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        change mode
      </button>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
