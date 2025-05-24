import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoadingSpinner } from "../common/UI";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loginInProgress } = useAuth();
  const location = useLocation();

  if (loginInProgress) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
