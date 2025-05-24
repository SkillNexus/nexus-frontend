import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../UI";

const MobileDrawer = ({ open, onClose, navItems }) => {
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 280 },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Logo size="small" />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.href)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate("/login");
              onClose();
            }}
          >
            Se connecter
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/signup");
              onClose();
            }}
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
