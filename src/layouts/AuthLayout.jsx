import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.gradient.primary,
}));

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </AuthWrapper>
  );
};

export default AuthLayout;
