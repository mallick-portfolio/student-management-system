import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/shared/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
    </>
  );
};

export default RootLayout;
