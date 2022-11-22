import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home";
import RootLayout from "./pages/layout/RootLayout";
import PageNotFound from "./pages/PageNotFound";

const routers = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Signup />,
    path: "/register",
  },
]);
export default routers;
