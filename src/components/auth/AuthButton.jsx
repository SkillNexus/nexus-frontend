import React from "react";
import { useAuth } from "../../hooks/useAuth";

const AuthButton = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button onClick={logout} style={{ marginLeft: 16 }}>
      Déconnexion
    </button>
  );
};

export default AuthButton;
