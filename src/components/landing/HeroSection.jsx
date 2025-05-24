import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled(Box)(() => ({
  background: "linear-gradient(135deg, #1A47B8 0%, #2373CD 100%)",
  color: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
}));

const HeroContent = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
}));

const HeroImage = styled("img")({
  width: "100%",
  aspectRatio: "1/1",
  objectFit: "contain",
  borderRadius: "16px",
  transform: "rotate(15deg)",
  backgroundColor: "white",
});

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <HeroContent>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                textAlign: "left",
                pr: { md: 4 },
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: "center",
                minHeight: "60vh",
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: "500",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  lineHeight: 1.1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Apprenez mieux
                <Box
                  component="span"
                  sx={{
                    color: "#4BB4F8",
                    display: "block",
                    fontSize: { xs: "2.5rem", md: "4.5rem" },
                  }}
                >
                  Ensemble
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 300,
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  lineHeight: 1.6,
                  maxWidth: "90%",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Trouver des "mates" d'apprentissage, fixez des objectifs communs
                et progressez plus efficacement grâce à l'accountability
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
                  backgroundColor: "#FF5722",
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F4511E",
                  },
                  alignSelf: { xs: "center", md: "flex-start" },
                }}
              >
                Rejoindre Nexus
              </Button>
            </Grid>
          </Grid>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
