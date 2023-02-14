import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

export default function Layout() {
  return (
    <div className="container">
      <HeaderNavigation />
      <Outlet />
    </div>
  );
}
