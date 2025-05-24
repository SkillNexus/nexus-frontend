import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const CTAWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.gradient.primary,
  color: "white",
  padding: theme.spacing(10, 0),
  textAlign: "center",
}));

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <CTAWrapper>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom fontWeight="bold">
          Prêt à transformer votre apprentissage ?
        </Typography>
        <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
          Rejoignez notre communauté d'apprenants motivés et découvrez la
          puissance de l'apprentissage collaboratif.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/signup")}
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1.1rem",
          }}
        >
          Commencer gratuitement
        </Button>
      </Container>
    </CTAWrapper>
  );
};

export default CTASection;
