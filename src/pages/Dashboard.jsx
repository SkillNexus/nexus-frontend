import {
  People as PeopleIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as TrophyIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const StatCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Objectifs actifs",
      value: "3",
      icon: <SchoolIcon />,
      color: "primary.main",
    },
    {
      title: "Partenaires",
      value: "2",
      icon: <PeopleIcon />,
      color: "secondary.main",
    },
    {
      title: "Heures d'apprentissage",
      value: "47",
      icon: <TrendingUpIcon />,
      color: "success.main",
    },
    {
      title: "Badges obtenus",
      value: "5",
      icon: <TrophyIcon />,
      color: "warning.main",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bienvenue, {user?.preferred_username || "Utilisateur"} !
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Voici un aperçu de votre progression d'apprentissage.
      </Typography>

      <Grid container spacing={3}>
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                      mr: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </StatCard>
          </Grid>
        ))}

        {/* Progress Card */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Progression hebdomadaire
            </Typography>
            <Box mb={3}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  JavaScript Avancé
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  75%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
            <Box mb={3}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  React & Redux
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  60%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={60}
                color="secondary"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
            <Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  Design Systems
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  40%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={40}
                color="warning"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Actions rapides
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="outlined" fullWidth>
                Trouver un partenaire
              </Button>
              <Button variant="outlined" fullWidth>
                Créer un objectif
              </Button>
              <Button variant="outlined" fullWidth>
                Rejoindre un groupe
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
