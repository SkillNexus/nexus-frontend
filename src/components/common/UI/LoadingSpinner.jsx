import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingSpinner = ({ message = "Chargement...", fullScreen = false }) => {
  const content = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      p={4}
    >
      <CircularProgress size={40} />
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );

  if (fullScreen) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.default"
        zIndex={9999}
      >
        {content}
      </Box>
    );
  }

  return content;
};

export default LoadingSpinner;
