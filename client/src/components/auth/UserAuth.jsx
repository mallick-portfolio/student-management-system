import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/userApi";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

const UserAuth = () => {
  const { data, error, isLoading } = useGetUserQuery();
  if (isLoading) {
    return "loading...";
  }
  if (error) {
    console.log(error);
  }
  const userType = data?.data?.userType;
  const status = data?.data?.status;
  return userType === "student" && status === "active" ? (
    <>
      <Header />
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserAuth;
