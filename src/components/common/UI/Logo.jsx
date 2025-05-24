import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
}));

const LogoIcon = styled(Box)(({ theme, size = "medium" }) => ({
  width: size === "small" ? 32 : size === "large" ? 48 : 40,
  height: size === "small" ? 32 : size === "large" ? 48 : 40,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: size === "small" ? "1rem" : size === "large" ? "1.5rem" : "1.25rem",
}));

const Logo = ({ size = "medium", color = "primary", onClick }) => {
  const fontSizes = {
    small: "h6",
    medium: "h5",
    large: "h4",
  };

  return (
    <LogoWrapper onClick={onClick}>
      <LogoIcon size={size}>N</LogoIcon>
      <Typography variant={fontSizes[size]} color={color} fontWeight="bold">
        Nexus
      </Typography>
    </LogoWrapper>
  );
};

export default Logo;
