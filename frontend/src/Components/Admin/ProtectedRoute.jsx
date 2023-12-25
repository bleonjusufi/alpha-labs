// ProtectedRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isLoggedIn ? (
          <Element />
        ) : (
          <Navigate to="/admin/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
