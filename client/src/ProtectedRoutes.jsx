import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  // return auth.logged ?
  const auth = { logged: false };
  return localStorage.getItem("auth") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export { ProtectedRoutes };
