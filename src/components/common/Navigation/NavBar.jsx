import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../../../hooks/useResponsive";
import { Logo } from "../UI";
import MobileDrawer from "./MobileDrawer";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NavBar = ({ transparent = false }) => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Comment ça marche", href: "#how" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color={transparent ? "transparent" : "default"}
          elevation={transparent ? 0 : 1}
          sx={{
            backdropFilter: transparent ? "blur(10px)" : "none",
            backgroundColor: transparent
              ? "rgba(255, 255, 255, 0.8)"
              : "background.paper",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Logo onClick={() => navigate("/")} />

              <Box sx={{ flexGrow: 1 }} />

              {!isMobile ? (
                <>
                  <Box sx={{ display: "flex", gap: 3, mr: 3 }}>
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        color="inherit"
                        onClick={() => scrollToSection(item.href)}
                        sx={{ color: "text.secondary" }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                  <Button
                    color="primary"
                    onClick={() => navigate("/login")}
                    sx={{ mr: 1 }}
                  >
                    Se connecter
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate("/signup")}
                  >
                    S'inscrire
                  </Button>
                </>
              ) : (
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: "text.primary" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <MobileDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
      />
    </>
  );
};

export default NavBar;
