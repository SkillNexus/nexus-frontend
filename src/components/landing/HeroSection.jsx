import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.gradient.primary,
  color: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/api/placeholder/1920/1080") center/cover',
    opacity: 0.1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <HeroContent>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Apprenez mieux
                <Box
                  component="span"
                  sx={{ color: "secondary.light", display: "block" }}
                >
                  ensemble
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 300,
                }}
              >
                Trouvez des partenaires d'apprentissage, fixez des objectifs
                communs et progressez plus efficacement grâce à
                l'accountability.
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
                Rejoindre Nexus
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: { xs: 300, md: 400 },
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                }}
              >
                <GroupsIcon sx={{ fontSize: 150, opacity: 0.5 }} />
              </Box>
            </Grid>
          </Grid>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
