import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Layout/Footer";
import { NavBar } from "../components/common/Navigation";

const MainLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box component="main" flexGrow={1} pt={8}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
