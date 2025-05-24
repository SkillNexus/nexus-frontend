import LoginIcon from "@mui/icons-material/Login";
import { Button, Divider, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../components/common/UI";
import { useAuth } from "../hooks/useAuth";

const AuthPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 400,
  width: "100%",
  margin: "0 auto",
}));

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async () => {
    await login();
    navigate(from, { replace: true });
  };

  return (
    <AuthPaper elevation={3}>
      <Logo size="large" />

      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 3 }}>
        Connexion
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 4 }}
      >
        Connectez-vous pour accéder à votre espace d'apprentissage
      </Typography>

      <Button
        fullWidth
        variant="contained"
        size="large"
        startIcon={<LoginIcon />}
        onClick={handleLogin}
        sx={{ mb: 3 }}
      >
        Se connecter
      </Button>

      <Divider sx={{ width: "100%", my: 2 }}>OU</Divider>

      <Typography variant="body2" color="text.secondary">
        Pas encore de compte ?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate("/auth/signup")}
          sx={{ fontWeight: "bold" }}
        >
          Inscrivez-vous
        </Link>
      </Typography>

      <Button
        variant="text"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => navigate("/")}
      >
        Revenir à l'accueil
      </Button>
    </AuthPaper>
  );
};

export default Login;
