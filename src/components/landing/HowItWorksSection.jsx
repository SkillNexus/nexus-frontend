import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StepCard = styled(Card)(({ theme }) => ({
  height: "100%",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const StepAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: "0 auto",
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
}));

const steps = [
  {
    number: "1",
    icon: <SchoolIcon fontSize="large" />,
    title: "Définissez vos objectifs",
    description:
      "Créez votre profil et précisez vos domaines d'intérêt, vos objectifs d'apprentissage et votre disponibilité.",
  },
  {
    number: "2",
    icon: <PeopleIcon fontSize="large" />,
    title: "Trouvez des partenaires",
    description:
      "Notre algorithme vous propose des partenaires compatibles avec vos objectifs et votre rythme d'apprentissage.",
  },
  {
    number: "3",
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Progressez ensemble",
    description:
      "Établissez un plan d'action commun, fixez des rendez-vous réguliers et motivez-vous mutuellement.",
  },
];

const HowItWorksSection = () => {
  return (
    <SectionWrapper id="how">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom color="primary.dark">
            Comment ça marche
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
          >
            Nexus simplifie votre parcours d'apprentissage en trois étapes
            simples pour vous aider à atteindre vos objectifs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.number}>
              <StepCard>
                <CardContent sx={{ p: 4 }}>
                  <StepAvatar>{step.icon}</StepAvatar>
                  <Typography variant="h4" gutterBottom color="primary.dark">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </StepCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
