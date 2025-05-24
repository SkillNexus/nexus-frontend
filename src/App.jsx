import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { AuthProvider } from "react-oauth2-code-pkce";
import { Provider } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { authConfig } from "./authConfig";
import { useAuth } from "./hooks/useAuth";
import { store } from "./store/store";
import theme from "./theme";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Components
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { LoadingSpinner } from "./components/common/UI";

const AppContent = () => {
  const { token, tokenData, updateCredentials, loginInProgress } = useAuth();

  useEffect(() => {
    if (token && tokenData) {
      updateCredentials(token, tokenData);
    }
  }, [token, tokenData, updateCredentials]);

  if (loginInProgress) {
    return <LoadingSpinner fullScreen message="Connexion en cours..." />;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="partners" element={<div>Partners Page</div>} />
        <Route path="goals" element={<div>Goals Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
      </Route>

      {/* Redirect old routes */}
      <Route path="/login" element={<Navigate to="/auth/login" replace />} />
      <Route path="/signup" element={<Navigate to="/auth/signup" replace />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AuthProvider authConfig={authConfig}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <AppContent />
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
