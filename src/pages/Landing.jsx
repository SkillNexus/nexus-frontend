import { Box } from "@mui/material";
import React from "react";
import {
  CTASection,
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
} from "../components/landing";

const Landing = () => {
  return (
    <Box>
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </Box>
  );
};

export default Landing;
