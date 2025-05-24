import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
  backgroundColor: theme.palette.background.default,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  position: "relative",
  padding: theme.spacing(3),
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: 60,
  color: theme.palette.secondary.main,
  opacity: 0.3,
  position: "absolute",
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Développeuse Web",
    avatar: "SM",
    content:
      "Grâce à Nexus, j'ai trouvé un partenaire qui partage ma passion pour le développement web. Nos sessions hebdomadaires m'ont permis de rester motivée et de progresser bien plus rapidement.",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Étudiant en langues",
    avatar: "TD",
    content:
      "Apprendre une langue seul peut être décourageant. Avec mon partenaire Nexus, nous pratiquons régulièrement et nous nous encourageons mutuellement. C'est beaucoup plus efficace !",
  },
  {
    id: 3,
    name: "Léa Moreau",
    role: "Designer UX/UI",
    avatar: "LM",
    content:
      "J'ai rejoint Nexus pour structurer mon apprentissage autodidacte en design. La plateforme m'a mise en relation avec un mentor qui m'a aidée à définir un parcours cohérent.",
  },
];

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom color="primary.dark">
            Ce que disent nos utilisateurs
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
          >
            Découvrez comment Nexus a transformé le parcours d'apprentissage de
            nos membres.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard>
                <QuoteIcon />
                <CardContent sx={{ pt: 6 }}>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontStyle: "italic",
                      mb: 3,
                      minHeight: 120,
                    }}
                  >
                    {testimonial.content}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
