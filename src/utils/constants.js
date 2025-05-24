export const APP_NAME = "Nexus";
export const APP_DESCRIPTION =
  "La plateforme qui connecte les apprenants pour un parcours d'apprentissage plus efficace";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  DASHBOARD: "/dashboard",
  PARTNERS: "/dashboard/partners",
  GOALS: "/dashboard/goals",
  SETTINGS: "/dashboard/settings",
  PROFILE: "/dashboard/profile",
};

export const SKILLS_CATEGORIES = [
  "Développement Web",
  "Développement Mobile",
  "Data Science",
  "Design",
  "Marketing Digital",
  "Langues",
  "Business",
  "Musique",
  "Photographie",
  "Autres",
];

export const LEARNING_FREQUENCIES = [
  { value: "daily", label: "Tous les jours" },
  { value: "2-3-week", label: "2-3 fois par semaine" },
  { value: "weekly", label: "Une fois par semaine" },
  { value: "biweekly", label: "Toutes les deux semaines" },
  { value: "monthly", label: "Une fois par mois" },
];

export const SKILL_LEVELS = [
  { value: "beginner", label: "Débutant" },
  { value: "intermediate", label: "Intermédiaire" },
  { value: "advanced", label: "Avancé" },
  { value: "expert", label: "Expert" },
];
