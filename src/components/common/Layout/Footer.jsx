import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Logo } from "../UI";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "white",
  padding: theme.spacing(8, 0, 4),
}));

const FooterLink = styled(Link)({
  color: "rgba(255, 255, 255, 0.8)",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "white",
  },
});

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Comment ça marche", href: "#how" },
      { label: "Fonctionnalités", href: "#features" },
      { label: "Tarifs", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    company: [
      { label: "À propos", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Carrières", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Conditions d'utilisation", href: "/terms" },
      { label: "Politique de confidentialité", href: "/privacy" },
      { label: "Mentions légales", href: "/legal" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: "https://facebook.com" },
    { icon: <TwitterIcon />, href: "https://twitter.com" },
    { icon: <LinkedInIcon />, href: "https://linkedin.com" },
    { icon: <GitHubIcon />, href: "https://github.com" },
  ];

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Logo color="white" />
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "rgba(255, 255, 255, 0.8)" }}
            >
              La plateforme qui connecte les apprenants pour un parcours
              d'apprentissage plus efficace.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    "&:hover": { color: "white" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Produit
            </Typography>
            {footerLinks.product.map((link) => (
              <Box key={link.label} mb={1}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Entreprise
            </Typography>
            {footerLinks.company.map((link) => (
              <Box key={link.label} mb={1}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Légal
            </Typography>
            {footerLinks.legal.map((link) => (
              <Box key={link.label} mb={1}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        <Box textAlign="center">
          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)">
            © 2025 Nexus. Tous droits réservés. Fait avec ❤️ en France.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
