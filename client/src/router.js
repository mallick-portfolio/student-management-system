import { createBrowserRouter } from "react-router-dom";
import UserAuth from "./components/auth/UserAuth";
import Student from "./pages/admin/Student";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home";
import RootLayout from "./pages/layout/RootLayout";
import PageNotFound from "./pages/PageNotFound";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Student />,
      },
    ],
  },
  {
    element: <UserAuth />,
    path: "dashboard",
    children: [
      {
        path: "admin",
        element: <Home />,
      },
      {
        path: "student",
        element: <Student />,
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
