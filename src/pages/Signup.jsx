import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button, Divider, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
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

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async () => {
    // Redirige vers le formulaire d'inscription Keycloak
    await login(undefined, { screen: "register" });
  };

  return (
    <AuthPaper elevation={3}>
      <Logo size="large" />

      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 3 }}>
        Inscription
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 4 }}
      >
        Créez votre compte pour rejoindre la communauté Nexus
      </Typography>

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<PersonAddIcon />}
        onClick={handleSignup}
        sx={{ mb: 3 }}
      >
        S'inscrire
      </Button>

      <Divider sx={{ width: "100%", my: 2 }}>OU</Divider>

      <Typography variant="body2" color="text.secondary">
        Déjà un compte ?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate("/auth/login")}
          sx={{ fontWeight: "bold" }}
        >
          Connectez-vous
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

export default Signup;
